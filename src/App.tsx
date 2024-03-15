import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
