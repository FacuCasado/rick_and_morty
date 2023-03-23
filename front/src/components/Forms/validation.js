const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/


const validation=(property, value)=>{
   const errors={};


   if(property==="username"){
      if(!value){
        errors.errorUser="Por favor complete el campo";
     }else if(value.length>35){
        errors.errorUser="El usuario es muy largo";
     }else if (!regex.test(value)){
        errors.errorUser="Ingrese un mail valido";
    }else{
      errors.errorUser="";
    }
   }

   if(property==="password"){
      if(value.length>=10 && value.length<=6 ){
        errors.errorPass="Contraseña entre 6 y 10 caracteres";
    }else if(!value.match(/\d/)){
        errors.errorPass="La contraseña debe tener un número";
     }else{
      errors.errorPass="";
     }
   }

   return errors;
};

export default validation;





