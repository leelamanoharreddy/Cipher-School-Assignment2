
import React, { Component } from 'react';
import CountGadget from './Gadget/countGadget';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    count: 0,
    bgColor: 'white' 
  };
  this.pluse= this.pluse.bind(this)
  this.reset = this.reset.bind(this)
  this.minus = this.minus.bind(this)
}
  pluse(){
    this.setState({
      count: this.state.count + 1,
      bgColor: this.randomColor()
    }
    ) 
  
  }

  minus(){
    this.setState({
      count: this.state.count - 1,
      bgColor: this.randomColor()
    }
    ) 
    
  }

  reset(){
    this.setState({
      count: 0,
      bgColor: 'white'
    }
    ) 
    
  }
  randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  render(){
    return(
      <div>
        <center>
          <h1>COUNT GADGET</h1>
          <CountGadget count = {this.state.count} bgColor = {this.state.bgColor} 
            pluse = {this.pluse} minus = {this.minus} reset = {this.reset}> 
          </CountGadget>
        </center>
    </div>
    )
  }

}

export default App;
