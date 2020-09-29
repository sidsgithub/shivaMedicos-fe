import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/feature/home";
import Cart from "../components/feature/cart/cart-view";
import { Button, Text } from "react-native";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{

            headerRight:() => (<BadgedIcon
              containerStyle={{ right: 10 }}
              name="md-cart"
              type="ionicon"
              color="white"
              onPress={() => navigation.navigate("Cart")}
  
            />),

            headerTitle: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),

            headerLeft: () => (
              user.isLoggedIn ? (
              <Button title="LogOutt" onPress={() => logoutHandler()} />
            ) : (
              <Button title="LogIn" onPress={() => signInWithGoogleAsync()} />
            )),
            
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
