
import React,{Component} from 'react';

import Greet from './Greet'

//in this i have used the greet component inside the class component by importing it 

class Welcome extends Component
{
    render()
    {
      const {myprops}=this.props;
      const {name}=this.props;
       return(
           <div>
               <div>This is Class Component </div>
               <div>{myprops}</div>
               <div>{name}</div>
               <Greet></Greet>
           </div>

       );
    }
}

export default Welcome;