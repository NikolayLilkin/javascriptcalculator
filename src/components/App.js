import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {Component} from 'react';
import Button from './Button';
import ButtonDanger from './ButtonDanger';
import { mapStateToProps } from './mapStateToProps';
import { mapDispatchToProps } from './mapDispatchToProps';
import { connect } from 'react-redux';
class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="container" id="container">
            <div className="row" style={{height:70}} id="display">
              <p className='text-end' style={{height:35}}>{this.props.state.num}</p>
              <p className='text-end'>{this.props.state.printvalue}</p>  
            </div>
            <div className="d-flex flex-wrap" id="keys">
                <ButtonDanger sign="AC" width="9.10rem"/>
                <Button sign="/"/>
                <Button sign="x"/>
                <Button sign="7"/>
                <Button sign="8"/>
                <Button sign="9"/>
                <Button sign="-"/>
                <Button sign="4"/>
                <Button sign="5"/>
                <Button sign="6"/>
                <Button sign="+"/>
                <Button sign="1"/>
                <Button sign="2"/>
                <Button sign="3"/>
                <Button sign="%"/>
                <Button sign="0" width="9.10rem"/>
                <Button sign="."/>
                <Button sign="="/>
              </div>
            </div>
          </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
