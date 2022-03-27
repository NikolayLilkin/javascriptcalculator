import {one,two,three,four,five,six,seven,eight,nine,zero,plus,multiply,modulo,divide,ac,equal,comma, minus} from './actions';
export const mapDispatchToProps = (dispatch) => {
    return {
        one: () => dispatch(one()),
        two: () => dispatch(two()),
        three: () => dispatch(three()),
        four: () => dispatch(four()),
        five: () => dispatch(five()),
        six: () => dispatch(six()),
        seven: () => dispatch(seven()),
        eight: () => dispatch(eight()),
        nine: () => dispatch(nine()),
        zero: () => dispatch(zero()),
        plus: () => dispatch(plus()),
        minus: () => dispatch(minus()),
        multiply: () => dispatch(multiply()),
        modulo: () => dispatch(modulo()),
        divide: () => dispatch(divide()),
        ac: () => dispatch(ac()),
        equal: () => dispatch(equal()),
        comma: () => dispatch(comma())
    }
}