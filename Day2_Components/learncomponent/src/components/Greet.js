
import React from 'react';


// function Greet2() {

//     return <h1>Hello Sandeep this is functional component without ES6</h1>
    
// }

 const Greet=(props)=> <h1>This is functional component using arrow function  {props.name}</h1>
//here we have send the used the props 
//we have send the name form the App component and from our funtion we are reading the props
//using named export we have to import with the same name 
//export const Greet=(props)=> <h1>This is functional component using arrow function  {props.name}</h1>

export default Greet;
