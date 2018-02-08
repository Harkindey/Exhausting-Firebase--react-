import React, {
  Component
} from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
  }

  componentDidMount() {
    database.ref().on('value', (snapshot) => {
      this.setState(() => {
        return {
          data: snapshot.val()
        }
      })
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // database.ref()
    //   .child('AmazingNewData')
    //   .push(this.state.newData);

    database.ref('/AmazingNewData')
      .push(this.state.newData);
  }

  handleChange = (e) => {
    const newData = e.target.value;
    this.setState({
      newData
    })
  }
  render() {
    return (
      <div className="App" >
        <header className="App--header">
          <h2> Welcome to React </h2></header >
        <p className="App--data" > {JSON.stringify(this.state.data, null, 2)} </p>
        <form className="App--form" value={this.state.newData} onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div >
    );
  }
}

export default App;