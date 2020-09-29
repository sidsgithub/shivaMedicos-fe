import { Icon, Header, withBadge } from "react-native-elements";
import React, { useState } from "react";
import { Button, View, ToastAndroid } from "react-native";
import * as Google from "expo-google-app-auth";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "../../actions/index";
import { showToast } from "../common/toast";
import { clientId } from "../../env";

export default function HeaderComponent(props) {
  const { navigation } = props.props;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart.value);

  const BadgedIcon = withBadge(cart ? cart : 0, { status: "warning", left: 1 })(
    Icon
  );

  function logoutHandler() {
    dispatch(logoutSuccess());
    console.log(user);
    showToast("Logged Out !!", ToastAndroid.LONG);
  }

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: clientId,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        dispatch(loginSuccess(result));
        showToast(`Logged In as ${result.user.givenName}!!`, ToastAndroid.LONG);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  return (
    <View>
      <Header
        leftComponent={
          user.isLoggedIn ? (
            <Button title="LogOutt" onPress={() => logoutHandler()} />
          ) : (
            <Button title="LogIn" onPress={() => signInWithGoogleAsync()} />
          )
        }
        centerComponent={{ text: "Shiva Medicos", style: { color: "#fff" } }}
        
        rightComponent={
          <BadgedIcon
            containerStyle={{ right: 10 }}
            name="md-cart"
            type="ionicon"
            color="white"
            onPress={() => navigation.navigate("Cart")}
          />
        }
      />
    </View>
  );
}
