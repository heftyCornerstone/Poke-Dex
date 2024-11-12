import router from "./shared/router";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
