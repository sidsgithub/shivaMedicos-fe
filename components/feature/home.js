import React from "react";
import {
  RefreshControl,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import MedsView from "./medsView";
import { DATA } from "./dummydata";
import Search from "../feature/search";
import HeaderComponent from "../common/header";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const Home = (props) => {
 
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent props={props} />
      <Search />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={DATA}
        renderItem={({ item }) => (
          <MedsView
            image={item.image}
            description={item.description}
            title={item.title}
            prescription={item.prescription}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Home;
