import React, { Component } from "react";

class SearchAdvice extends Component{
   state={
       inputSearch:''
   }
    render(){
        return (
            <div className="">
            <h3>Search</h3>
        <input type="text" value={this.state.inputSearch} onChange={(e)=>this.setState({inputSearch:e.target.value})}/>
        <button onClick={()=>this.props.handleInputSearch(this.state.inputSearch)}>Submit</button>
            </div>
        )
    }
}
export default SearchAdvice;