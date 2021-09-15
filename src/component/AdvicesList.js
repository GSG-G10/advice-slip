import React, { Component } from "react";
import data from "../data";
class AdvicesList extends Component{
    render(){
        return (
            <div>
              <h1>Advices List</h1>
               <ul>
                   {data.map(data=>(
                       <div>
                       <li>{data.advice}</li>
                       <li>{data.category}</li>
                       <li>{data.date}</li>
                       </div>
                   ))}
               </ul>
            </div>
        )
    }
}
export default AdvicesList;