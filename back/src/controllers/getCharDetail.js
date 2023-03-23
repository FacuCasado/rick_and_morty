const axios = require("axios")

const { URL, KEY } = process.env

const succesHandler=(response, res)=>{
    const {id,image,name,gender,species, status}=response.data
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify({id,image,name,gender,species, status}))
};

const errorHandler=(error, res)=>{
    res.writeHead(500, {"COntent-Type":"text/plain"})
    res.end(error.message)
};

const getCharDetail=(res, id)=>{
    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then(response=>succesHandler(response, res))  
    .catch(error=>errorHandler(error, res));
}

module.exports=getCharDetail;