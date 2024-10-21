import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  Dimensions 
} from 'react-native';
import { Tmovies } from '../../../constants/Profilescreen';

const screenWidth = Dimensions.get('window').width;



const TrailerSection = () => {
  const renderMovieCard = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      {/* Scrollable Movie Posters */}
      <FlatList
        data={Tmovies}
        renderItem={renderMovieCard}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.moviesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moviesList: {
    marginTop: 20,
  },
  movieCard: {
    marginRight: 15,
    width: screenWidth * 0.6,
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TrailerSection;
