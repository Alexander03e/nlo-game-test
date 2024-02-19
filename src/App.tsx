import { Provider } from "react-redux";
import { Game } from "./Game";
import "./scss/app.scss";
import { store } from "./store/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Game />
      </Provider>
    </>
  );
}

export default App;
