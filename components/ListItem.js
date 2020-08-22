import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListItem = ({ imgUrl, title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.newsItem}>
        <View style={styles.leftContainer}>
          {!!imgUrl && (
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: imgUrl }}
            ></Image>
          )}
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.Text}>
            {title}
          </Text>
          <Text style={styles.subText}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsItem: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  Text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
});
export default ListItem;
