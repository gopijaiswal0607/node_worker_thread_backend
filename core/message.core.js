
const DBAction = require('../datalayer/dbaction.datalayer');
const Message = require('../models/message.model');
class MessageCore{
    static insertNewMessage=async(insertObject)=>{
      try{
        let InitMessageCollection = new DBAction(Message);
        const ingestSuccess=await InitMessageCollection.insertIntoDb(insertObject);
        console.log("ingestSuccess",ingestSuccess);
        return {success:true,msg:"message Ingest Successfull"};
      }
      catch(e)
      {
        console.error("error in the insertNewMessage",e);
        throw(e);
      }
    }
}
module.exports = MessageCore