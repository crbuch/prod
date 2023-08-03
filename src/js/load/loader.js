export function lazyLoad() {
    let region = sessionStorage.region
    let data = {
      prod: null,
      cuml: null,
      mnth: null,
      econ: null,
      payout: null,
      pumpInfo: null,
      formation: null
    };
    let res;
    console.log('region :>> ', region);
    if (region == 'ST' || region == null){
      res = import('./st').then(module => {
        data.prod = module.dataST
        data.cuml = module.dataCumlST
        data.mnth = module.mnthDataST
        data.econ = module.econ
        data.payout = module.payout
        data.pumpInfo = module.pump
        data.formation = module.formations
        return data
      })
    }else if (region == 'ET'){
      res = import('./et').then(module => {
        data.prod = module.dataET
        data.cuml = module.dataCumlET
        data.mnth = module.mnthDataET
        data.formation  = module.formations
        return data
      })
    }else if (region == 'NM'){
      res = import('./nm').then(module => {
        data.prod = module.dataNM
        data.cuml = module.dataCumlNM
        return data
      })
    }else if (region == 'GC'){
      res = import('./gc').then(module => {
        data.prod = module.dataGC
        data.cuml = module.dataCumlGC
        return data
      })
    } else if (region == 'WT'){
      res = import('./wt').then(module => {
        data.prod = module.dataWT
        data.cuml = module.dataCumlWT
        return data
      })
    }
    return res
}