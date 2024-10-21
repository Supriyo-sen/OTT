import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { movies } from "../../../constants/HomeScreen";

const screenWidth = Dimensions.get("window").width;

const categories = ["All", "Action", "Adventure", "Mystery"];



const MovieCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderMovieCard = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
      <View style={styles.type}>
        {item.type.map((type, index) => (
          <Text key={index} style={styles.movieType}>
            {type.title}
          </Text>
        ))}
      </View>
    </View>
  );

  const renderCategoryTab = ({ item }) => (
    <TouchableOpacity
      style={[styles.tabButton, selectedCategory === item && styles.activeTab]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text
        style={[
          styles.tabText,
          selectedCategory === item && styles.activeTabText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* Categories Tabs  */}
      <FlatList
        data={categories}
        renderItem={renderCategoryTab}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      />

      {/* Scrollable Movie Posters */}
      <FlatList
        data={movies[selectedCategory]}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.moviesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#E91E63",
  },
  tabText: {
    fontSize: 16,
    color: "black",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
  moviesList: {
    marginTop: 20,
  },
  movieCard: {
    marginRight: 15,
    width: screenWidth * 0.6,
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  type: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  movieType: {
    padding: 4,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
  },
});

export default MovieCard;
