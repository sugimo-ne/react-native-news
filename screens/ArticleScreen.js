import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Article</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
