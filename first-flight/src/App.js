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

    this.dataRef = null;
  }

  componentDidMount() {
    this.dataRef = database.ref()
    //on('child_added')
    //once()
    database.ref().on('value', (snapshot) => {
      console.log(snapshot);
      this.setState(() => {
        return {
          data: snapshot.val()
        }
      })
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.dataRef
    //   .child('AmazingNewData')
    //   .push(this.state.newData);

    /*  snapshot.key()
        snapshot.hasChild()
        snapshot.forEach()
        snapshot.remove()

    */


    this.dataRef
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