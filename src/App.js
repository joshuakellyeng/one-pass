
import React, { Component } from 'react';
import PasswordGen from './components/PasswordGen/PasswordGen';

class App extends Component {
  state = {
    baseURL: 'https://passwordinator.herokuapp.com/generate',
    num: '?num=true',
    char: '&char=true',
    caps: '&caps=true',
    len: '&len=15',
    genPassword: ''
  }

  componentDidMount() {
    console.log('Mounted App.js')
    const { baseURL, num, char, caps, len } = this.state
    fetch( baseURL + num + char + caps + len)
      .then(res => res.json())
      .then(data => this.setState({ genPassword: data}))
      .catch(error => console.error(error))
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    // console.log(this.state.genPassword)
    const { baseURL, num, char, caps } = this.state
    console.log(baseURL + num + char + caps )
    return (
      <div>
       <PasswordGen password={this.state} />
       {/* <h1>{this.state.genPassword.data}</h1> */}
      </div>
    );
  }
}

export default App;
