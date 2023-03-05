// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.about}>Developed with Heart under MIT license.</Text>
      <Text style={styles.footing}>Github: @minlaxz</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  footing: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  }
});