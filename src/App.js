import React, { Component } from "react";
import   AdvicesList from '../src/component/AdvicesList'
// import GetAdvise from "./utils/GetAdvise";
class  App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super()
  
  }
  render(){
    return (
      <main>
      {/* <section className="filters">
        <h3>Search</h3>
        <input/>
       <div className="categosries">
        <form className="categories">
        <h2 className="category">Categories</h2>
       <label>Work
              <input
            type='radio'
            name='categories' // name groups the inputs
             />
             </label>
               <label>Time
             <input
            type='radio'
            name='categories' // name groups the inputs
             />
             </label>
               <label>spiders
             <input
            type='radio'
            name='categories' // name groups the inputs
             />
             </label>
        </form>
        </div>
      </section> */}
      <section className="device">
          <AdvicesList />
      </section>
    </main>
 
  );
  }


}

export default App;
