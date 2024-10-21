import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { movies } from "../../../constants/Profilescreen";

const categories = ["All", "Movies", "Drama", "Thriller", "Romantic"];



const LatestShow = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderMovieCard = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  const renderCategoryTab = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        selectedCategory === item && styles.activeTab,
      ]}
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
      {/* Categories Tabs */}
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
    borderColor: "red",
    borderWidth: 1,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#E91E63",
  },
  tabText: {
    fontSize: 16,
    color: "red",
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
    width: 120,
  },
  movieImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  movieTitle: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
});

export default LatestShow;
