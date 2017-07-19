import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    
constructor() {
    super();
    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ""
    }
}

handleChange(val) {
    this.setState({ userInput: val})
}

assignEvenAndOdds(userInput) {
    const arr = userInput.split(",");
    const even = [];
    const odd = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i])
        }
    }
    this.setState({evenArray: even, oddArray: odd})
}

    render() {
        return (
        <div className="puzzleBox EvenAndOddPB">
          <h4> Even and Odds </h4>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick= { () => { this.assignEvenAndOdds(this.state.userInput) } }> Split </button>
          <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
          <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
        </div>
        )
    }
  }


