import React, { useState } from 'react';
import { useSelecter } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

export default ClipScreen = ({ navigation }) => {
  const user = useSelecter((state) => state.user);
  const { clips } = user;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <ListItem
            imgUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', { article: item })}
          ></ListItem>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
