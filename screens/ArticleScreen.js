import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text>ADD_CLIP</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }));
        }}
      >
        <Text>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }}></WebView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
