// mobile/App.js
import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS==='android'?25:0 }}>
      <WebView source={{ uri: 'https://your-domain.com' }} />
    </SafeAreaView>
  );
}
