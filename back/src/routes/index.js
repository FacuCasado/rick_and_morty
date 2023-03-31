const {Router}=require ("express");
const getCharById= require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let favs= require("../utils/favs")


const router = Router();


router.get("/onsearch/:id", getCharById)

router.get("/detail/:id", getCharDetail)




router.post("/rickandmorty/fav",(req,res)=>{
    if(req.body){
        favs.push(req.body)
        res.status(200).json({status:"ok"})
    }else{
        res.status(500).json({error:error.message})
    }
});

router.get("/rickandmorty/fav",(req,res)=>{
    res.status(200).json(favs)
});

router.delete("/rickandmorty/fav/:id",(req,res)=>{
    const {id}=req.params;
    try {
        favs = favs.filter((char) => char.id !=Number(id));
        console.log(id);
        console.log(Number(id));
        res.status(200).json({success: true})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})



module.exports= router;
