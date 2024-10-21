import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/FontAwesome6';
import Cast from '../components/ui/cast';
import { suggestedMovies } from '../../constants/Moviedetail';

const screenWidth = Dimensions.get('window').width;




const MovieDetail = () => {
  const [showMore, setShowMore] = useState(false);

  const renderSuggestedMovie = ({ item }) => (
    <View style={styles.suggestionCard}>
      <Image source={item.image} style={styles.suggestionImage} />
      <Text style={styles.suggestionTitle}>{item.title}</Text>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <FIcon name="circle" size={16} color="red" />
        <Text style={styles.suggestionViews}>{item.views} views</Text>
        </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Movie Detail</Text>
        <Icon name="bookmark" size={24} color="black" />
      </View>

      {/* Movie Poster and Title */}
      <Image source={require('../../assets/images/home.png')} style={styles.moviePoster} />
      <Text style={styles.movieTitle}>Fistful of Vengeance</Text>
      <View style={styles.movieDetails}>
        <Text style={styles.detailText}>📅 17 Sep 2021</Text>
        <Text style={styles.detailText}>⏱ 148 Minutes</Text>
        <Text style={styles.detailText}>🎥 Action Drama</Text>
      </View>

      {/* Rating */}
      <View style={styles.ratingContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Icon key={index} name="star" size={20} color="#FFD700" />
        ))}
        <Icon name="star" size={20} color="#ccc" />
      </View>

      {/* Play and Watch Trailer Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" size={20} color="white" />
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trailerButton}>
          <Icon name="youtube" size={20} color="#E91E63" />
          <Text style={styles.trailerText}>Watch trailer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trailerButton}>
          <Icon name="share" size={20} color="#E91E63" />
        </TouchableOpacity>
      </View>

      {/* Storyline Section */}
      <Text style={styles.sectionTitle}>Story Line</Text>
      <Text numberOfLines={showMore ? undefined : 3} style={styles.storyText}>
        Lorem ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        <Text onPress={() => setShowMore(!showMore)} style={styles.showMore}>
          {showMore ? ' Show Less' : ' Show More'}
        </Text>
      </Text>

      {/* Cast Section */}
      <Text style={styles.sectionTitle}>Cast</Text>
      <Cast/>

      {/* Suggested Movies Section */}
      <Text style={styles.sectionTitle}>Suggestion Movie</Text>
      <FlatList
        data={suggestedMovies}
        renderItem={renderSuggestedMovie}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.suggestionList}
      />
      <View style={{ marginBottom: 80 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moviePoster: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginTop: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  movieDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  detailText: {
    fontSize: 14,
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: '#E91E63',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  trailerButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E91E63',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  trailerText: {
    color: '#E91E63',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  storyText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  showMore: {
    color: '#E91E63',
  },
  castList: {
    marginTop: 10,
  },
  castCard: {
    marginRight: 15,
    alignItems: 'center',
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
  suggestionList: {
    marginTop: 10,
  },
  suggestionCard: {
    marginRight: 15,
    width: screenWidth * 0.4,
  },
  suggestionImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  suggestionTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  suggestionViews: {
    color: 'gray',
  },
});

export default MovieDetail;
