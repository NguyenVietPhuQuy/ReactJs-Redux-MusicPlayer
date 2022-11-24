const { combineReducers } = require("redux");
const { default: ProductReducer } = require("./ProductReducer");


const RootReducer = combineReducers(
    {songList: ProductReducer,}
)
export default RootReducer