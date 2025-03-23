import React from 'react'

function Input({value, onChange, placeholder}) {
  return (
    <input type="text" value={value} onChange={(e)=>onChange(e.targert.value)}
    placeholder={placeholder} style={styles.input}/>
  );
};
const styles ={
  input:{
    width:"30%",
    padding:"10px",
    margin:"10px 0",
    border:"1px solid #ccc",
    borderRadius:"5px",
  },
};
export default Input;