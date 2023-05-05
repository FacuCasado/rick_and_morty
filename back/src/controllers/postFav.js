const {Favorite} = require('../DB_connection');

const postFav=async(req,res)=>{
    const {name,image,species,gender}=req.body;
    try {

        if(!name||!image||!species||!gender){
            res.status(401).json("Faltan datos")
        }else{
           const newFav = await Favorite.create({
                name,
                //origin,
                image,
                species,
                gender
            });
            
            const favs=await Favorite.findAll();

            res.status(200).json(favs); 
        }
        
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=postFav;