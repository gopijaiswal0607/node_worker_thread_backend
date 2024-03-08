const PolicyCore = require('../core/policy.core');
class policyController{
    static searchPolicyInfoByUsername = async(req,res)=>{
     try{
        const {userName} = req.params;
        if(userName?.trim())
        {
            return res.send(500).json({success:false,msg:'userName is not valid'});
        }
        const policyInformationOfuser = PolicyCore.getPolicyInfomation()
       res.send(200).json({data:policyInformOuser,success:true})
     }
     catch(e)
     {
        res.send(500).json({success:false,msg:`${e}`});
     }
    }
    static getAggregatedPolicy = async(req,res)=>{
        try{
          // call core function to get this information
          const result = PolicyCore.getAggPolicyByUser();
          res.send(200).json({success:true,data:result})
        }
        catch(e)
        {
          console.error("Error in getAggregatedPolicy",e);
          res.send(500).json({success:false,msg,e});
        }
    }
}
module.exports = policyController