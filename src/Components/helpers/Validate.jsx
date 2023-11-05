
export const regExpEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//La contraseña debe tener 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula
export const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

export const validateEmail=(field)=>{
    if(
      regExpEmail.test(field) && field.trim() !== ""    
    ){
      return true;
    } else{
      return false;
    }
  
  }
  export const validatePassword=(field)=>{
    if(
      regExpPassword.test(field) && field.trim() !== ""   
    ){
      return true;
    } else{
      return false;
    }
  }