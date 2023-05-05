const {User} = require('../DB_connection');

const login=async(req, res)=>{
    const {email, password}=req.query;

    try {

        if(!email || !password){
            return res.status(400).json("Faltan datos")
        };

        const userMail=await User.findOne({ where: { email: email } })

        if(!userMail){
            return res.status(403).json("Usuario no encontrado")
        };

        if (password !== userMail.password) {
            return res.status(403).json("Contraseña incorrecta");
          };

        res.status(200).json({access: true})
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports=login;