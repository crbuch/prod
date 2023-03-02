import json
import time 
import datetime
alldata = open('/Users/matt/Documents/cml/stprod-1/STprod/data/allProductionData.json')

prod = json.load(alldata)

months = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
}
times = {}
for well in prod:
    if well[0] not in times:
        times[well[0]] = []
    d = well[1].split()
    unix = (time.mktime(datetime.datetime(int(d[2]),months[d[0]],int(d[1][:-1]),0,0,0).timetuple()))
    times[well[0]].append(unix)

for key, val in times.items():
    recent = 0
    for t in val:
        if t > recent: recent = t
    times[key] = recent
    recent = 0
print(times)