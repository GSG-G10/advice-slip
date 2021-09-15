import React, { Component } from "react";
import   AdvicesList from '../src/component/AdvicesList'
import GetAdvise from "./utils/GetAdvise";
class  App extends Component {
  constructor(){
    super()
  
  }
  render(){
    return (
    <div className="App">
     
      <AdvicesList />

    </div>
  );
  }


}

export default App;
