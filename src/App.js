import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: undefined,
  }

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <h1 className="Headline">1TR!</h1>

        <input type="text" onChange={this.handleChange} />

        {value ? (
          <Fragment>
            <p><b>Deine Eingabe:</b></p>
            <p>{value}</p>
          </Fragment>
        ) : null}
      </div>
    );
  }
}

export default App;
