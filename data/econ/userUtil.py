import pandas as pd
import json

def addMonth(month):
    #df = pd.read_json('data\econ\pldata.json',orient='values').T
    df = pd.read_json('testplJul.json',orient='values').T

    print(df)
    newmonth = pd.read_json(f'data\econ\may.json')
    n = []
    for idx,row in newmonth.iterrows():
        mask = row['Well Name'].upper() == df['Well Name'].str.upper()
        if not mask.any():print(f"NONE {row['Well Name'].upper()}");n.append(row['Well Name'].upper())
        df.loc[mask,f'{month} 23'] = row['Recent Month P&L']
    print(sorted(n))

    d = df.fillna(0).to_dict(orient='index')
    print(d)
    res = {}
    for key,inner in d.items(): 
        for k,v in inner.items():
            if isinstance(v,str):
                if "-" in v:
                    inner[k] = 0
        res[inner["Well Name"]] = inner
    print(res)
    with open('./testplAll.json', 'w') as f:
        json.dump(res, f)
    return

addMonth('May')