import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// Store 
import usestore from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(<>
<Provider store={usestore}>
  <App />
  </Provider>
</>, document.getElementById("root"));
