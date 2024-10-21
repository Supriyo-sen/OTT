import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MovieCard from "../components/ui/moviecard";

import { popularMovies } from "../../constants/HomeScreen";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi, Andy</Text>
            <Text style={styles.subtitle}>only streaming movie lovers</Text>
          </View>
        </View>
        <Icon name="bell" size={24} color="black" />
      </View>

      {/* Category Section */}
      
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Today Top Movie</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
        <MovieCard/>
      {/* Popular Movies */}
      <View style={{marginBottom: 10}}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Most Popular Movies</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={popularMovies}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.popularMovie}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularTitle}>{item.title}</Text>
            <Text style={styles.popularViews}>{item.views} views</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "gray" },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  subSection:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 0,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  seeAll: { color: "#E91E63" },
  categoryButton: {
    padding: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: { fontSize: 16 },
  movieCard: { marginTop: 20 },
  movieImage: { width: "100%", height: 200, borderRadius: 10 },
  movieDetails: { marginTop: 10 },
  movieTitle: { fontSize: 16, fontWeight: "bold" },
  movieSubtitle: { color: "gray" },
  popularMovie: { marginRight: 15 },
  popularImage: { width: 100, height: 150, borderRadius: 10 },
  popularTitle: { marginTop: 5, fontSize: 14, fontWeight: "bold", width: 100 },
  popularViews: { color: "gray" },
});

export default HomeScreen;
