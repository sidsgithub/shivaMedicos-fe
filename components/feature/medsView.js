import React from "react";
import { Text, View, StyleSheet, Image, Button, ToastAndroid } from "react-native";
import { Badge } from "react-native-elements";
import { showToast } from '../common/toast';
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  outerView: {
    flexDirection: "row",
  },
  innerView1: {
    flex: 1,
    padding: 10,
  },
  innerView2: {
    flex: 2,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    paddingLeft: 200,
  },
});

function MedsView({ title, image, description, prescription }) {

  const cartHandler=()=>{
    
    showToast('Added to Cart',ToastAndroid.SHORT);
  }

  return (
    <View style={styles.outerView}>
      <View style={styles.innerView1}>
        <Image style={styles.logo} source={require("../../assets/med.jpg")} />
      </View>
      <View style={styles.innerView2}>
        <Text>{title}</Text>
        {prescription ? (
          <Badge
            status="success"
            value="Prescription required."
            containerStyle={{ position: "absolute", top: 10, right: 10 }}
          />
        ) : null}
        <Text>{description}</Text>
        <Button style={styles.button} onPress={cartHandler} title="add to cart" />
      </View>
    </View>
  );
}

export default MedsView;
