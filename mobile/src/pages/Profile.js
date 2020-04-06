import * as React from 'react';
import { WebView } from 'react-native-webview'

function Profile({route}){
  const { github_username } = route.params; //Take username form Main.js

  return(
  <WebView style={{flex: 1}} source={{ uri: `https://github.com/${github_username}` }}/>
  );
}

export default Profile;