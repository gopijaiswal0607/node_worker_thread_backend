const DBAction = require("../datalayer/dbaction.datalayer");
const PolicyInfo = require("../models/policyinfo.model")
class PolicyCore{
 
    static getPolicyInfomation=async (userName)=>{
     let InitCollection = new DBAction(PolicyInfo);
     let result = await InitCollection.findInDb({userName:`/${userName}/`});
     return result;
    }
    static getAggPolicyByUser=async()=>{
      let InitCollection = new DBAction(PolicyInfo);
      let result = await InitCollection.getAggregatedPoliciesByUser();
      return result;
    }

}
module.exports = PolicyCore;