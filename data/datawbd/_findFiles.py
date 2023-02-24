import os
import json
import csv
import re




def createDict(files,pattern):
    file_dict = {}
    shows = []

    for file in files:
        well, _ = os.path.splitext(file)
        num = well[-2]
        well_name = well[:-2]
        
        if well.lower().endswith('show'):
            shows.append(file)
            continue

        if re.search(pattern,well):#more than 2 nums
            well_name = well[:-1]
            num = None

        if num:
            well_name = well_name + " #" + num

        if well_name not in file_dict:
            file_dict[well_name] = []

        file_dict[well_name].append(file)

    for show in shows:
        well_name = show[:-8]#remove show.csv
        if not re.search(pattern,well_name):
            num = well_name[-1]
            well_name = well_name[:-1] + ' #' + num
        file_dict[well_name].append(show)
    return file_dict

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

def main():
    path = "./data/datawbd"
    pattern = r"\d.*\d.*\d" 

    files = sorted(os.listdir(path))

    file_dict = createDict(files,pattern)

    del file_dict['_findFil #e']
    del file_dict['wel #l']

    print(file_dict)
    file_dict = removeCamelCase(file_dict)

    file = '/Users/matt/Documents/cml/stprod-1/STprod/data/datawbd/wells.json'

    with open(file, "w") as f:
        json.dump(file_dict, f)

if __name__ == '__main__':
    main()