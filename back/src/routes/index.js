const {Router}=require ("express");
const getCharById= require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const postUser = require('../controllers/postUser');
const deleteFav = require('../controllers/deleteFav');
const postFav = require('../controllers/postFav');
const login = require('../controllers/login');
const getFav = require('../controllers/getFav')



const router = Router();


//! Rutas de characters
router.get("/onsearch/:id", getCharById)

router.get("/detail/:id", getCharDetail)



//! Rutas de favoritos
router.post("/rickandmorty/fav", postFav);

router.get("/rickandmorty/fav",getFav);

router.delete("/rickandmorty/fav/:id",deleteFav)



//! Rutas de usuarios
router.get("/rickandmorty/login", login);

router.post("/rickandmorty/login", postUser);


module.exports= router;
