const Agent = require('../models/agent.model');
const User = require('../models/user.model');
const UserAccount = require('../models/useraccount.model')
const PolicyCarrier = require('../models/policycarrier.model');
const PolicyCategory = require('../models/policycategory.model');
const PolicyInfo = require('../models/policyinfo.model');
const DBAction = require('./dbaction.datalayer')
class UtilityDatalayer {
    static insertAllInformation=async(data)=>{
        //Note: We can use transaction in mongoose to perform this operation
        // insert user
        let InitUserCollection = new DBAction(User);
        await InitUserCollection.insertIntoDb(data.user);
        // insert policyinfo
        let InitpolicyInfoCollection = new DBAction(PolicyInfo);
        await InitpolicyInfoCollection.insertIntoDb(data.policyInfo);
        // insert user Account
        let InituserAccountCollection = new DBAction(UserAccount);
        await InituserAccountCollection.insertIntoDb(data.userAccount,UserAccount);
        //insert agent info
        let InitagentCollection = new DBAction(Agent);
        await InitagentCollection.insertIntoDb(data.agent,Agent);
        // insert policyCategory info'
        let InitpolicyCategoryCollection = new DBAction(PolicyCategory);
        await InitpolicyCategoryCollection.insertIntoDb(data.policyCategory);
        // insert policycarrier info
        let InitpolicyCarrierCollection = new DBAction(PolicyCarrier);
        await InitpolicyCarrierCollection.insertIntoDb(data.policyCarrier);
    }
}
module.exports = UtilityDatalayer