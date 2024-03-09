const { v4: uuidv4 } = require('uuid');
class UtilityCore
{
  // TODO: Some more enhancement we can do still there like making adopter service to dynamically handle the column name
   static splitDifferentCollectionData=async(data)=>
   {
     const seperatedItem = {user:[],policyInfo:[] ,userAccount:[],agent:[],policyCategory:[],policyCarrier:[]}
     for(let obj of data)
     {
     seperatedItem.agent.push({agent_id:uuidv4(),agent_name:data["agent"]});
     seperatedItem.user.push({user_id:uuidv4(),
      first_name:data["firstname"],
      data_of_birth:data['dob'],
      address:data['address'],
      phone_number:data["phone"],
      state:data["state"],
      zip_code:data["zip"],
      email:data["email"],
      gender:data["gender"],
      user_type:data["userType"]})
      seperatedItem.policyInfo.push({policy_id:uuidv4(),
      policy_start_data:data["policy_start_date"],
      policy_end_date:data["policy_end_date"],
      policy_category:data["policy_category"],
      collection_id:data["Collection Id"],
      company_collection_id:data["Company Collection Id"],
      user_id:uuidv4()
      })
      seperatedItem.userAccount.push({account_id:uuidv4(),account_name:data["account_name"],user_id:uuidv4()})
      seperatedItem.policyCarrier.push({policy_carrier_id:uuidv4(),company_name:data["company_name"]})
      seperatedItem.policyCategory.push({policy_category_id:uuidv4(),category_name:data["category_name"]})
    }

     return seperatedItem;
   }
}
module.exports = UtilityCore