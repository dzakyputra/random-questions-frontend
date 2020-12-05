import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.updateDate = this.updateDate.bind(this);
      
      this.state = {
        minute: 0,
        second: 0
      }
      
      this.interval = setInterval(this.updateDate, 1000);
      
    }
    
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    updateDate() {

      if(this.state.second === 59) {
        this.setState({
            second: 0,
            minute: this.state.minute + 1 
        });
      } else {
        this.setState({
            second: this.state.second + 1
        });
      }
    }
    
    render() {
      return(
        <div className="text-white">{this.state.minute}m {this.state.second}s</div>
      );
    }
  }

export default Counter;