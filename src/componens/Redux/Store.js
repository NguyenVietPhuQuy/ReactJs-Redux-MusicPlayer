const { createStore } = require("redux");
const { default: RootReducer } = require("./RootReducer");


const store = createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store