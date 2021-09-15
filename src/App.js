import React, { Component } from "react";
import AdvicesList from '../src/component/AdvicesList'
import CategoryAdvices from '../src/component/CategoryAdvices'
import GetAdviseApi from './utils/GetAdvise'
import SearchAdvice from "./component/SearchAdvice";
import './component/Style.css'
import data from "./data";

// import GetAdvise from "./utils/GetAdvise";
class  App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super()
    this.state = {
      data:data
    }
  }
  CategoryChangeData = event => {
    GetAdviseApi(event.target.value).then(res => this.setState({ data:res.slips}))
  }

  handleInputSearch = (word) =>{

    GetAdviseApi(word).then(res => this.setState({ data:res.slips}))
   
  }
  render(){
    return (
      <main>
      <section className="filters">
       
        <SearchAdvice handleInputSearch={this.handleInputSearch} />
        <CategoryAdvices CategoryChangeData={this.CategoryChangeData}/>
      </section>
      <section className="device">
          <AdvicesList data={this.state.data} />
      </section>
    </main>
 
  );
  }


}

export default App;
