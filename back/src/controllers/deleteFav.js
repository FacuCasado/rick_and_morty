const {Favorite} = require('../DB_connection');

const deleteFav=async(req, res)=>{
    const {id} =req.params;
    try {
        const fav = await Favorite.findByPk(id);
        await fav.destroy();
        const favs = await Favorite.findAll();
        res.status(200).json(favs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=deleteFav;