import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducers from './src/redux/reducers'
import Appinit from './Appinit'
import thunk from 'redux-thunk';
// import SplashScreen from './src/screens/splashScreen';
// import Authstack from './src/navigations/authStack';

const store=createStore(Reducers,{},applyMiddleware(thunk))


const App = () => {
  return (
    <Provider store={store}>
      <Appinit/>
    </Provider>
  );
};


export default App;

