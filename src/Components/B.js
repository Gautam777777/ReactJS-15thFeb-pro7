//1.Import Area

import { Component } from "react";
import C from "./C";


//2.Function/Class Defination Area

//Lets define another component
class B extends Component{
    //1.properties/variables
  
    //2.constructor
  
    //3.methods
    //Every class component must have render method
    render(){
      return (
             <>
              <div> VIRAT KOHLI {this.props.data3} </div>
              <C data4 = {this.props.data3}></C>
             </>
             ) 
    }
  }
                

  //3.Export Area

  //3.1 Default Export
  export default B;

  //3.2 Named Export
