import React from "react";
import {
  RefreshControl,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { DATA } from "./dummy-cart-data";
import CartItem from "./items";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

/**
 * below the header we have :
 *  an order id.
 *  a list showing the things ordered :
 *    image, description, no. of items, cost of each item
 *  a modal to upload the prescription.
 *  a checkout button.
 */

export default Cart = () => {
  const orderId = "orderId : # 1344dfw342dfGDSD";
  const total = "281";
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Button title={orderId} type="outline"></Button>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={DATA}
        renderItem={({ item }) => (
          <CartItem
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            amount={item.amount}
            prescription={item.prescription}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalView}>
        <View></View>
        <View style={styles.innerView}>
          <Text style={styles.text}>Total : </Text>
          <Text style={styles.text}>{total}</Text>
        </View>
      </View>
      <Button title="checkout" type="outline" raised></Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  totalView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 15,
    color: "red",
  },
});
