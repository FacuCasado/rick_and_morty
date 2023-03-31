const axios = require("axios")
const { URL, KEY } = process.env;


const getCharDetail = async (req, res)=>{

    try {
        const {id}=req.params;

        const response = await axios.get(`${URL}/character/${id}?key=${KEY}`)
        const {name, species, image, gender, origin}=response.data;

        res.status(200).json({id, name, species, image, gender, origin})
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    


};

module.exports= getCharDetail;