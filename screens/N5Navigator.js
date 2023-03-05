import { createDrawerNavigator } from '@react-navigation/drawer';
import { N5Screen } from './index';

const Drawer = createDrawerNavigator();

export default function N5Navigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="MM-NiHonGo"
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
      <Drawer.Screen name="N5 Screen" component={N5Screen} />
      <Drawer.Screen name="KoToBa" component={N5Screen} />
    </Drawer.Navigator>
  )
}