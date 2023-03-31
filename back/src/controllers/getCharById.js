const axios = require("axios")

const { URL, KEY } = process.env;


const getCharById = async (req, res)=>{
    
    const {id}=req.params;
    try {

        const response = await axios.get(`${URL}/character/${id}?key=${KEY}`)
        const {name, species, image, gender}=response.data;

        res.status(200).json({id, name, species, image, gender})
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    


};

module.exports= getCharById;