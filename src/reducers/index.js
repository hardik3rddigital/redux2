import changethenumber from "./incrementdecrement"; // import reducers case define using if else statement
import { combineReducers } from "redux"; // if multiple reducer handle it

const mainReducer = combineReducers({
    changethenumber
    // ,backgroundchange like this (add multiple reducer)
})

// combineReducers in muliple reducer can be added

export default mainReducer;
