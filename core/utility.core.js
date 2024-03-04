class UtilityCore
{
   static splitDifferentCollectionData=async(data)=>
   {
     const seperatedItem = {user:[],policyInfo:[] ,userAccount:[],agent:[],policyCategory:[],policyCarrier:[]}
     for(let obj of data)
     {
     seperatedItem.agent.push({agent_id:uuid(),agent_name:data[Agent]});
     seperatedItem.user.push({user_id:data["user Id"],
      first_name:data["first Name"],
      data_of_birth:data['DOB'],
      address:data['address'],
      phone_number:data["Phone Number"],
      state:data["state"],
      zip_code:data["zip code"],
      email:data["email"],
      gender:data["gender"],
      user_type:data["userType"]})
      seperatedItem.policyInfo.push({policy_id:uuid(),
      policy_start_data:data["Policy Start Date"],
      policy_end_date:data["policy_end_date"],
      policy_category:data["policy category"],
      collection_id:data["Collection Id"],
      company_collection_id:data["Company Collection Id"],
      user_id:data["userId"]
      })
      seperatedItem.userAccount.push({account_id:uuid(),account_name:data["account Name"],user_id:data["userId"]})
      seperatedItem.policyCarrier.push({policy_carrier_id:uuid(),company_name:data["company Name"]})
      seperatedItem.policyCategory.push({policy_carrier_id:uuid(),category_name:data["Category Name"]})
    }

     return seperatedItem;
   }
}
module.exports = UtilityCore