import React from "react";
import HeaderComponent from "./components/common/header";
import { Provider } from "react-redux";
import store from "./store";
import MainStackNavigator from "./navigation/index";

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
