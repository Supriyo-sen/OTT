import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailScreen = ({ route }) => {
  const { data } = route.params || {}; 

  return (
    <View style={styles.container}>
      {data ? (
        <>
        <Text style={styles.text}>Name: {data.name}</Text>
        <Text style={styles.text}>Email: {data.email}</Text>
        <Text style={styles.text}>Phone: {data.phone}</Text>
        <Text style={styles.text}>Address: {data.address}</Text>
        <Text style={styles.text}>Password: {data.password}</Text>
        </>
      ) : (
        <Text style={styles.text}>No data available</Text>
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
