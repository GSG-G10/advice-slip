import React, { Component } from "react";
class AdvicesList extends Component{
    render(){
        return (
            <div>
              <h1>Advices List</h1>
               <ul>
                   {this.props.data.map(data=>(
                       <div className='card'>
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