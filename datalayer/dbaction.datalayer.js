
class DBAction{
 insertIntoDb=async(data,Collection)=>{
    const initCollection = new Collection(data);
    await initCollection.save();
 }
}
module.exports = DBAction