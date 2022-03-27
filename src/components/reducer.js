import {create, all} from 'mathjs';
const math = create(all,{});
const initialState = {
    num:"",
    printvalue:"",
    result:false
}
const digitLimitError = (text) => {
    if(text.length===20){
        return true;
    }
    else{
        return false;
    }
}
const calculate = (text) => {
    text = text.replace("x","*");
    try {
        return math.evaluate(text);
    } catch (error) {
        return "Syntax Error";
    }
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case "1":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true   
                }
            }
            else{
                if(state.result){
                    return {
                        num: "1",
                        printvalue:"1", 
                        result:false
                    }
                }
                return {
                    num: state.num+"1",
                    printvalue:state.printvalue+"1", 
                    result:state.result
                }
            }
        case "2":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true   
                }
            }
            else{
                if(state.result){
                    return {
                        num: "2",
                        printvalue:"2", 
                        result:false
                    }
                }
                return {
                    num: state.num+"2",
                    printvalue:state.printvalue+"2", 
                    result:state.result
                }
            }
        case "3":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true  
                }
            }
            else{
                if(state.result){
                    return {
                        num: "3",
                        printvalue:"3", 
                        result:false
                    }
                }
                return {
                    num: state.num+"3",
                    printvalue:state.printvalue+"3", 
                    result:state.result
                }
            }
        case "4":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true    
                }
            }
            else{
                if(state.result){
                    return {
                        num: "4",
                        printvalue:"4", 
                        result:false
                    }
                }
                return {
                    num: state.num+"4",
                    printvalue:state.printvalue+"4", 
                    result:state.result
                }
            }
        case "5":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true    
                }
            }
            else{
                if(state.result){
                    return {
                        num: "5",
                        printvalue:"5", 
                        result:false
                    }
                }
                return {
                    num: state.num+"5",
                    printvalue:state.printvalue+"5", 
                    result:state.result
                }
            }
        case "6":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true   
                }
            }
            else{
                if(state.result){
                    return {
                        num: "6",
                        printvalue:"6", 
                        result:false
                    }
                }
                return {
                    num: state.num+"6",
                    printvalue:state.printvalue+"6", 
                    result:state.result
                }
            }
        case "7":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true    
                }
            }
            else{
                if(state.result){
                    return {
                        num: "7",
                        printvalue:"7", 
                        result:false
                    }
                }
                return {
                    num: state.num+"7",
                    printvalue:state.printvalue+"7", 
                    result:state.result
                }
            }
        case "8":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true  
                }
            }
            else{
                if(state.result){
                    return {
                        num: "8",
                        printvalue:"8", 
                        result:false
                    }
                }
                return {
                    num: state.num+"8",
                    printvalue:state.printvalue+"8", 
                    result:state.result
                }
            }
        case "9":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true     
                }
            }
            else{
                if(state.result){
                    return {
                        num: "9",
                        printvalue:"9", 
                        result:false
                    }
                }
                return {
                    num: state.num+"9",
                    printvalue:state.printvalue+"9", 
                    result:state.result
                }
            }
        case "0":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true    
                }
            }
            else{
                if(state.result){
                    return {
                        num: "0",
                        printvalue:"0", 
                        result:false
                    }
                }
                return {
                    num: state.num+"0",
                    printvalue:state.printvalue+"0", 
                    result:state.result
                }
            }
        case ".":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true    
                }
            }
            else{
                if(state.result){
                    return {
                        num: ",",
                        printvalue:",", 
                        result:false
                    }
                }
                return {
                    num: state.num+".",
                    printvalue:state.printvalue+".", 
                    result:state.result
                }
            } 
        case "+":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true    
                }
            }
            else{
                if(state.result){
                    return {
                        num: "+",
                        printvalue:"", 
                        result:false
                    }
                }
                return {
                    num: state.num+"+",
                    printvalue:"", 
                    result:state.result
                }
            }
        case "-":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:0    
                }
            }
            else{
                if(state.result){
                    return {
                        num: "-",
                        printvalue:"", 
                        result:false
                    }
                }
                return {
                    num: state.num+"-",
                    printvalue:"", 
                    result:state.result
                }
            }
        case "/":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true   
                }
            }
            else{
                if(state.result){
                    return {
                        num: "/",
                        printvalue:"", 
                        result:false
                    }
                }
                return {
                    num: state.num+"/",
                    printvalue:"", 
                    result:state.result
                }
            }
        case "*":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true  
                }
            }
            else{
                return {
                    num: state.num+"x",
                    printvalue:"", 
                    result:state.result
                }
            }
        case "%":
            if(digitLimitError(state.num)){
                return {
                    num: "",
                    printvalue:"Error", 
                    result:true  
                }
            }
            else{
                return {
                    num: state.num+"%",
                    printvalue:"", 
                    result:state.result
                }
            } 
        case "=":
            let result = calculate(state.num);
            return {
                num:"",
                printvalue:result,
                result:true
            }
        case "AC":
        return {
            num:"",
            printvalue:"", 
            result:false
        }            
        default:
            return state;
    }
}
export default reducer;