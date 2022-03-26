import { Component } from "react";
import {connect} from 'react-redux';
import { mapStateToProps } from "./mapStateToProps";
import {mapDispatchToProps} from "./mapDispatchToProps";

class Button extends Component{
    constructor(props){
        super(props);
        this.change=this.change.bind(this);
    }
    change(){
        console.log("You clicked on " + this.props.sign);
        switch (this.props.sign) {
            case "1":
                this.props.one();
                break;
            case "2":
                this.props.two();
                break; 
            case "3":
                this.props.three();
                break;
            case "4":
                this.props.four();
                break;
            case "5":
                this.props.five();
                break;
            case "6":
                this.props.six();
                break;
            case "7":
                this.props.seven();
                break;
            case "8":
                this.props.eight();
                break; 
            case "9":
                this.props.nine();
                break;
            case "0":
                this.props.zero();
                break;
            case "+":
                this.props.plus();
                break;
            case "-":
                this.props.minus();
                break;
            case "/":
                this.props.divide();
                break;
            case "*":
                this.props.multiply();
                break; 
            case "%":
                this.props.modulo();
                break;
            case "=":
                this.props.equal();
                break;
                               
            default:
                break;
        }
    }
    render(){
        return(
            <button className="btn btn-primary shadow-none" style={{width:this.props.width}} onClick={this.change}>{this.props.sign}</button>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Button);