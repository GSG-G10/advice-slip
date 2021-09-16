import React, { Component } from "react";

class SearchAdvice extends Component{
   state={
       inputSearch:''
   }
    render(){
        return (
            <div className="search-section">
           
        <input type="text" value={this.state.inputSearch} onChange={(e)=>this.setState({inputSearch:e.target.value})} placeholder="Search Input"/>
        <button onClick={()=>this.props.handleInputSearch(this.state.inputSearch)} className="btn">Submit</button>
            </div>
        )
    }
}
export default SearchAdvice;