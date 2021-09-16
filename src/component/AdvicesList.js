import React, { Component } from "react";
class AdvicesList extends Component{
    render(){
        let data
        if (this.props.data === undefined) {
             data = [    {
                id: 1,
                advice: "The requested data was not found",
                category:"",
                date: ""
                },]
        }else{
             data = this.props.data
        }
        return (
            <div>
              <h1>Advices List</h1>
               <ul>     
                   {data.map(data=>(
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