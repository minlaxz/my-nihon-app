import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import store from './features/store';
import { Provider as ReduxProvider } from 'react-redux';
import { useColorScheme } from 'react-native';

import MainNavigator from './screens/MainNavigator';

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <ReduxProvider store={store}>
        <MainNavigator />
      </ReduxProvider>
    </NavigationContainer>
  );
}
