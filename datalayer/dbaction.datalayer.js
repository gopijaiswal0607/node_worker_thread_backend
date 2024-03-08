
class DBAction{
   constructor(Collection)
   {
      this.Collection = Collection
   }
   insertIntoDb=async(data)=>{
   try{
    const initCollection = new this.Collection(data);
    await initCollection.save();
   }
   catch(e){
      throw(e);
   }
 }
 findInDb=async(searchCondition)=>{
   try{
   const result = await this.Collection.find({...searchCondition});
   return result;
     }
     catch(e){
      throw(e);
     }
 }

   getAggregatedPoliciesByUser=async()=> {
   try {
     const result = await this.Collection.aggregate([
       {
         $group: {
           user_id: '$user_id', // Group by user_id
           policies: { $push: '$$ROOT' }, // Gather all documents within each group
           policyCount: { $sum: 1 }, // Count the number of policies for each user
           averagePolicyDuration: { $avg: { $subtract: ['$policy_end_date', '$policy_start_date'] } }, // Calculate the average duration 
         },
       },
     ]);
 
     console.log('Aggregated Policies by User:', result);
     return result;
   } catch (error) {
     console.error('Error in getAggregatedPoliciesByUser:', error);
     throw error;
   }
 }

}
module.exports = DBAction