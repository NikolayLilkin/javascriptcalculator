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
const combineOperators = (one,two) => {
    if(one==="-" && two==="-"){
        return "+";
    }
    else if(one==="-" && two==="+"){
        return "-";
    }
    else if(one==="+" && two==="-"){
        return "-";
    }
    else if(one==="+" && two==="+"){
        return "+";
    }
    else{
        return "Error";
    }
}
const calculate = (text) => {
    let splited=text.split(/[-+x"/"%]+/);
    let operators = [];
    let result = 0;
    let i = text.length - 1 ;
    if(text[i]==="+" ||text[i]==="-" || text[i]==="/"|| text[i]==="x" || text[i]==="%") return "Error"; 
    for (let index = 0; index < text.length-1; index++) {
        if((text[index]==="+" ||text[index]==="-" || text[index]==="/"|| text[index]==="x" ||text[index]==="%") &&
        (text[index+1]==="+" ||text[index+1]==="-" || text[index+1]==="/"|| text[index+1]==="x" ||text[index+1]==="%")){
            let operator=combineOperators(text[index],text[index+1]);
            if(operator==="Error") return "Error";
            operators.push(operator);
            index++;
        }
        else if(text[index]==="+" ||text[index]==="-" || text[index]==="/"|| text[index]==="x" ||text[index]==="%"){
            operators.push(text[index]);
        }
    }
    console.log(operators);
    console.log(splited);
    if(operators.length===0 && splited.length===1 && splited[0]==="") return 0;
    console.log(result);
    if(operators.length===0 && splited.length===1){
        return splited;
    }
    while(operators.length!==0){
        if(operators[0]==="+"){
            result = result + (parseFloat(splited[0]) + parseFloat(splited[1]));
            splited.shift();
            splited.shift();
            operators.shift();
        }
        else if(operators[0]==="-"){
            result = result + (parseFloat(splited[0]) - parseFloat(splited[1]));
            splited.shift();
            splited.shift();
            operators.shift();
        }
        else if(operators[0]==="x"){
            result = result + (parseFloat(splited[0]) * parseFloat(splited[1]));
            splited.shift();
            splited.shift();
            operators.shift();
        }
        else if(operators[0]==="/"){
            result = result + (parseFloat(splited[0]) / parseFloat(splited[1]));
            splited.shift();
            splited.shift();
            operators.shift();
        }
        else if(operators[0]==="%"){
            result = result + (parseFloat(splited[0]) % parseFloat(splited[1]));
            splited.shift();
            splited.shift();
            operators.shift();
        }
        else{
            splited.shift();
            operators.shift();
        }
    }
    return result;

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