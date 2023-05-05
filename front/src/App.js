import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import Title from './components/Title/Title';
import React, {useState, useEffect} from 'react';
import { useNavigate, Route, Routes, useLocation} from 'react-router-dom'
import About from "./views/about/About.jsx"
import Details from './views/detail/Detail';
import Forms from './components/Forms/Forms';
import Forms2 from './components/Forms/Forms2';
import Favorites from "../src/views/favorites/Favorites"
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite } from './Redux/actions';



function App () {

  const location = useLocation();
  const[access, setAccess]=useState(false);
  const [characters, setCharacters]=useState([]);
  const username=""
  const password=""
  const navigate=useNavigate();

  
  const dispatch=useDispatch();





function onClose(id){
    setCharacters(characters.filter(char=>char.id!==id))
  }





  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
   else{
    alert("Usuario Incorrecto")
   }
  }
 


  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  function onSearch(id) {
    const URL_BASE="http://localhost:3001"
    //const key="82ad9bd6c4f3.467dff24f889a9ac0ead"
    fetch(`${URL_BASE}/onsearch/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }


  

  
//style={{ padding: '25px' }}

    

  return (
    <div className='App' >

      
      <div>
      {location.pathname !== '/'&&<Title/>}
      </div>
      
      <div>
        {location.pathname !== '/'&&<Nav onSearch={onSearch}/>}
      </div>
    

    <Routes>
      <Route path="/" element={<Forms login={login}/>} />
      <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} ></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/detail/:detailId" element={<Details/>}></Route>
    </Routes>

      
    </div>
  )
}

export default App
