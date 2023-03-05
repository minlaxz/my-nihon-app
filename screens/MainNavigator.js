import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, AboutScreen } from './index';
import N5Navigator from './N5Navigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2196f3',
        },
        headerTintColor: '#fafafa',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Main Screen"
        component={MainScreen}
        options={{ title: "Main Page" }}
      // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Stack.Screen
        name="N5 Navigator Screen"
        component={N5Navigator}
        options={{
          title: 'JLPT N5',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="About Screen"
        component={AboutScreen}
        options={{ title: 'About Page' }}
      />
    </Stack.Navigator>
  )
}