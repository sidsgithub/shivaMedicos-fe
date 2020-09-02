import React from "react";
import { StyleSheet } from "react-native";
import HeaderComponent from "./components/common/header";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/feature/search";
import Home from "./components/feature/home"; 

export default function App() {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <Search></Search>
      <Home></Home>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
