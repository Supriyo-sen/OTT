import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import LatestShow from '../components/ui/latestshow';
import TrailerSection from '../components/ui/trailersection';

import { trendingMovies, recentlyViewed } from '../../constants/Profilescreen';

const ProfileScreen = () => {

  const renderMovieCard = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView  style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/*TRAILER SECTION*/}
      <View style={styles.sectionHeader}>
      <TrailerSection/>
      </View>

      {/* Trending Now Section */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={trendingMovies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      {/* Latest Shows Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Latest Shows</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs for Latest Shows */}
      <LatestShow/>

      {/* Recently Viewed Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.recentlyViewed
        }>Recently Viewed</Text>
        </View>
        <FlatList
          data={recentlyViewed}
          renderItem={renderMovieCard}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      paddingHorizontal: 20,
    },
    time: {
      color: 'white',
      fontSize: 16,
      marginTop: 10,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    sectionTitle: {
      color: 'red',
      fontSize: 18,
      fontWeight: 'bold',
    },
    recentlyViewed: {
      color: 'purple',
      fontSize: 18,
      fontWeight: 'bold',
    },
    showAll: {
      color: 'white',
      fontSize: 14,
    },
    horizontalList: {
      marginTop: 10,
    },
    movieCard: {
      marginRight: 15,
      width: 120,
    },
    movieImage: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    movieTitle: {
      color: 'white',
      fontSize: 14,
      marginTop: 5,
    },
    categoryTab: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      backgroundColor: '#333',
      marginRight: 10,
    },
    activeTab: {
      backgroundColor: 'red',
    },
    tabText: {
      color: 'white',
      fontSize: 16,
    },
    activeTabText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  export default ProfileScreen;
  