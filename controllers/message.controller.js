const MessageCore = require('../core/message.core');
class messageController{
    static scheduleMessage= async(req,res)=>{
        try{
         
            const { message, day, time } = req.body;
            // Example validation
            if (!message || !day || !time) {
                return res.status(400).json({ error: 'Invalid request. Please provide message, day, and time.' });}           
                const scheduledTime = new Date(`${day} ${time}`);
                const isIngest = await MessageCore.insertNewMessage({scheduledTime:scheduledTime,message:message})
                res.send(200).json(isIngest);
        }
        catch(e)
        {
            console.error("error in scheduleMessage",e);
            res.send(200).json({message:"Seduled of the msg failed"});
        }
    }
}
module.exports = messageController