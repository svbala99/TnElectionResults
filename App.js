import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
class App extends Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://results.eci.gov.in/Result2021/partywiseresult-S22.htm?st=S22/',
        }}
      />
    );
  }
}
export default App;
