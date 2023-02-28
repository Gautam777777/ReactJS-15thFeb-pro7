//1.Import Area

import B from "./B";

//2.Function/Class Defination Area

let A =(props)=>{    //Function define by fat arrow
    let data1 = "data1";
    console.log(props);
    //Every function return something
    return  (
              <>
                <div>
                  GAUTAM {data1} {props.children} {props.name} {props.surname}  
                  <div>SHARMA </div>
                </div>
                <B data3 = {props.surname}></B>
              </> 
            )
}

  //3.Export Area

  //3.1 Default Export
  export default A;

  //3.2 Named Export