const {Favorite} = require('../DB_connection');

const getFav=async(req,res)=>{
    const favs=await Favorite.findAll();
    res.status(200).json(favs)
}

module.exports=getFav;