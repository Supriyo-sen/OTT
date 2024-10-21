import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";

import { cast } from "../../../constants/Moviedetail";

const renderCast = ({ item }) => (
  <View style={styles.castCard}>
    <Image source={item.image} style={styles.castImage} />
    <Text style={styles.castName}>{item.name}</Text>
  </View>
);

const Cast = () => {
  return (
    <View>
      <FlatList
        data={cast}
        renderItem={renderCast}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.castList}
      />
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({
  castList: {
    marginTop: 10,
  },
  castCard: {
    marginRight: 15,
    alignItems: "center",
  },
  castImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  castName: {
    marginTop: 5,
    fontSize: 12,
  },
});
