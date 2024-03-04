const Agent = require('../models/agent.model');
const User = require('../models/user.model');
const UserAccount = require('../models/useraccount.model')
const PolicyCarrier = require('../models/policycarrier.model');
const PolicyCategory = require('../models/policycategory.model');
const PolicyInfo = require('../models/policyinfo.model');
const DBAction = require('./dbaction.datalayer')
class UtilityDatalayer {
    static insertAllInformation=async(data)=>{
        // insert user 
        await DBAction.inserIntoDb(data.user,User);
        // insert policyinfo
        await DBAction.inserIntoDb(data.policyInfo,PolicyInfo);
        // insert user Account
        await DBAction.inserIntoDb(data.userAccount,UserAccount);
        //insert agent info
        await DBAction.inserIntoDb(data.agent,Agent);
        // insert policyCategory info'
        await DBAction.inserIntoDb(data.policyCategory,PolicyCategory);
        // insert policycarrier info
        await DBAction.inserIntoDb(data.policyCarrier,PolicyCarrier);
    }
}
module.exports = UtilityDatalayer