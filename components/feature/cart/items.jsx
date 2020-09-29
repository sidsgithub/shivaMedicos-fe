import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { Badge } from "react-native-elements";

export default CartItem = ({
  title,
  description,
  quantity,
  amount,
  prescription,
}) => (
  <View style={styles.view}>
    <View style={styles.innerView1}>
      <Image style={styles.logo} source={require(" ../../../assets/med.jpg")} />
    </View>
    <View style={styles.innerView2}>
      {prescription ? (
        <Badge
          status="success"
          value="Prescription required"
          containerStyle={{ right: 20 }}
        />
      ) : null}
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
    <View style={styles.innerView3}>
      <Text style={styles.text}>{quantity}</Text>
    </View>
    <View style={styles.innerView4}>
      <Text style={styles.text}>{amount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  innerView1: {
    flex: 3,
  },
  innerView2: {
    flex: 3,

    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  innerView3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  innerView4: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text: {},
  view: {
    margin: 10,
    flexDirection: "row",
  },
});
