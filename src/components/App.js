import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Component} from 'react';

class App extends Component{
  render(){

    return (
      <div className="App">
        <div className="container" id="container">
            <p>Display</p>
            <div className="row">
              <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-danger" style={{width:"6rem"}}>AC</button>
                <button className="btn btn-primary">/</button>
                <button className="btn btn-primary">x</button>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-primary">7</button>
                <button className="btn btn-primary">8</button>
                <button className="btn btn-primary">9</button>
                <button className="btn btn-primary">-</button>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-primary">4</button>
                <button className="btn btn-primary">5</button>
                <button className="btn btn-primary">6</button>
               <button className="btn btn-primary">+</button>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-primary">1</button>
                <button className="btn btn-primary">2</button>
                <button className="btn btn-primary">3</button>
                <button className="btn btn-primary">=</button>
                  </div>
              <div className="d-flex flex-row justify-content-center">
                <button className="btn btn-primary" style={{width:"6rem"}}>0</button>
                <button className="btn btn-primary">.</button>
                <button className="btn btn-primary">%</button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
