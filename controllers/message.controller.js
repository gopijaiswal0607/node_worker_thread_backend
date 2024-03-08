class messageController{
    static scheduleMessage= async(req,res)=>{
        try{
         
            res.send(200).json({message:"Seduled of the msg successfull"});
        }
        catch(e)
        {
            res.send(200).json({message:"Seduled of the msg failed"});
        }
    }
}
module.exports = messageController