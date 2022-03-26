const initialState = {
    num:"",
    result:0
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case "1":
            return {
                num: state.num+"1",
                result:state.result
            }
        case "2":
            return {
                num: state.num+"2",
                result:state.result
            }
        case "3":
            return {
                num:state.num+"3",
                result:state.result
            }
        case "4":
            return {
                num:state.num+"4",
                result:state.result
            }
        case "5":
            return {
                num:state.num+"5",
                result:state.result
            }
        case "6":
            return {
                num:state.num+"6",
                result:state.result
            }
        case "7":
            return {
                num:state.num+"7",
                result:state.result
            }
        case "8":
            return {
                num:state.num+"8",
                result:state.result
            }
        case "9":
            return {
                num:state.num+"9",
                result:state.result
            }
        case "0":
            return {
                num:state.num+"0",
                result:state.result
            }
        case "+":
            return {
                num:state.num+"+",
                result:state.result
            }
        case "-":
            return {
                num:state.num+"-",
                result:state.result
            }
        case "/":
            return {
                num:state.num+"/",
                result:state.result
            }
        case "*":
            return {
                num:state.num+"*",
                result:state.result
            }
        case "%":
            return {
                num:state.num+"%",
                result:state.result
                }    
        case "=":
        return {
            num:state.num,
            result:state.result
        } 
        case "AC":
        return {
            num:"",
            result:0
        }            
        default:
            return state;
    }
}
export default reducer;