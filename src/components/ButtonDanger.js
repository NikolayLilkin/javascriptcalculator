import { Component } from "react";
import {connect} from 'react-redux';
import {mapStateToProps} from "./mapStateToProps";
import {mapDispatchToProps} from "./mapDispatchToProps";

class ButtonDanger extends Component{
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
    }
    change(){
        console.log("You clicked on AC");
        console.log(this.props.ac());
        console.log(this.props.state);
    }

    render(){
        return(
            <button className="btn btn-danger shadow-none" style={{width:this.props.width}} onClick={this.change}>{this.props.sign}</button>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ButtonDanger);