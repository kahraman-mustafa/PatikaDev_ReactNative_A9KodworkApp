import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import LoadingAnimation from './app/components/LoadingAnimation';
import {persistor, store} from './redux/store';
import Router from './router/Router';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingAnimation message="Reading Persisted State..." />}
        persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
