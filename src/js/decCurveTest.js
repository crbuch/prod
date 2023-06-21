import { monitorRegion } from './region'
import { monitorAuthState } from './index'
import { select } from 'd3';
import { makeTrace, makeLayout, config } from './layout';
import { setActive, setActiveView, checkActive, setActiveTime } from './ui';
import { layoutWbd } from './layout';
import { json, select, csv, extent } from 'd3';

// Read Csv for one well
const well_names = await json("../data/declineCurves/#wells.json").then((data) => {
    return data
  });
  
  const well_params = await json("../data/declineCurves/#params.csv").then((data) => {
    return data
  });

const declineCurve = (timeFrame, data) => {
    console.log(well_names)
}
// separate into arrays
// read arrays and create graph
