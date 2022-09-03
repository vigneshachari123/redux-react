import "./App.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./store/Store"
import { CakeHook } from "./component/CakeHook";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <CakeHook/>
      </div>
    </Provider>
  );
}

export default App;
