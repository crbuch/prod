import os
import json
import csv
import re
import math
from math import radians

def parseShowName(well):
    print("WELL",well)
    pattern = r"\d.*\d.*\d"  #more than 2 nums
    well_name = well[:-8]#remove show.csv

    if not re.search(pattern,well_name):
        num = well_name[-1]
        well_name = well_name[:-1] + ' #' + num
    return well_name
    
def createDict(files):
    file_dict = {}
    shows = []
    pattern = r"\d.*\d.*\d"  #more than 2 nums

    for file in files:
        if file[-3:] != 'csv': continue
        well, _ = os.path.splitext(file)
        num = well[-2] # well number 1 or 2
        well_name = well[:-2] + " #" + num

        if well.lower().endswith('show'):
            shows.append(file)
            continue

        if re.search(pattern,well):# (pattern: well_name123 bore_num)
            well_name = well[:-1]#remove bore num
            num = None

        if well_name not in file_dict:
            file_dict[well_name] = []

        file_dict[well_name].append(file)

    return file_dict,shows

def clearBlanks(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".csv"):
            csv_path = os.path.join(folder_path, filename)
            with open(csv_path, "r") as csv_file:
                csv_reader = csv.reader(csv_file)
                data = list(csv_reader)
                if len(data) == 0:
                    os.remove(csv_path)
                    print(f"{filename} has been deleted.")
                else: pass
                    #print(f"{filename} contains data.")

def removeCamelCase(d):
    new_d = {}
    for key, value in d.items():
        new_key = re.sub(r'(?<=[a-z])(?=[A-Z](?![A-Z]{2}))', ' ', key)
        new_d[new_key] = value
    return new_d

def genShowPlanes(shows,folder_path):
    #shows: filename for show data
    #point: [tvd,northing,easting]
    faults = {}
    for show in shows:
        well_name = parseShowName(show)
        faults[well_name] = []
        path = os.path.join(folder_path, show)
        with open(path, "r") as f:
            csv_reader = csv.reader(f)
            next(csv_reader)#remove first line
            data = list(csv_reader)
            for point in data:
                faults[well_name].append(createFaultPlanes(point))
    return faults

def createFaultPlanes(showPoint):
    lineOrigin = genOrginLineAbtZ(showPoint)

    zdists = [-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,10,20,30,40,50,60,70,80,90,100]
    lines = [lineOrigin]

    for zdist in zdists:
        lines.append(rotateAbtY(lineOrigin,zdist))

    print('\n LINES \n')
    print(lines)
    return lines

def genOrginLineAbtZ(point):
    showPoint = []
    for s in point:
        showPoint.append(float(s))

    xdist = 500
    anglexy = 30

    ydist = xdist / math.tan((anglexy * math.pi) / 180)

    if showPoint[1] < 0:
        ydist *= -1
    if showPoint[1] < 0:
        xdist *= -1

    x1 = showPoint[2] + xdist
    y1 = showPoint[1] + ydist

    x2 = showPoint[2] - xdist
    y2 = showPoint[1] - ydist

    return [[-showPoint[0], -showPoint[0]],
        [y1, y2],
        [x1, x2]
    ]

def rotateAbtY(line, zdist):
    anglezx = 45
    xdist = zdist * math.tan(radians(anglezx))
   
    _x1 = line[2][0] + xdist
    _x2 = line[2][1] + xdist

    _z = line[0][0] + zdist
    
    return [
        [_z,_z],
        [line[1][0],line[1][1]],
        [_x1,_x2]
    ]

def main():
    path = "./data/datawbd"

    files = sorted(os.listdir(path))

    file_dict,shows = createDict(files)

    folder_path = '/Users/matt/Documents/cml/stprod-1/STprod/data/datawbd/'
    faults_dict = genShowPlanes(shows,folder_path)
    faults_dict = removeCamelCase(faults_dict)
    print(faults_dict)

    file_dict = removeCamelCase(file_dict)
    print(file_dict)

    file = '/Users/matt/Documents/cml/stprod-1/STprod/data/datawbd/wells.json'
    showFile = '/Users/matt/Documents/cml/stprod-1/STprod/data/datawbd/shows.json'

    with open(file, "w") as f:
        json.dump(file_dict, f)

    with open(showFile, "w") as f:
        json.dump(faults_dict, f)

if __name__ == '__main__':
    main()