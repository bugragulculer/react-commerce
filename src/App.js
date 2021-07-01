import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = ({ store, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <AppRouter/>
        </PersistGate>
    </Provider>
  );
}

export default App;
