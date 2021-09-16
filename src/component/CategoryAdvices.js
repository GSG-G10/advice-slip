import React, { Component } from "react";
const categories = ['Work','Time','spiders']
class CategoryAdvices extends Component{
    render(){
        return (
          
            <div className="categosries">
                 
            <form className="categories">
        
          
            {categories.map(category => {
                return (
                <label>{category} <input key={category.id}  type='radio' name='categories' value={category} onChange={this.props.CategoryChangeData} /> </label>
                )
            })}
            </form>
            </div>
        )
    }
}
export default CategoryAdvices;