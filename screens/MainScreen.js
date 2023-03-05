// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { LaxzButton } from '../components/global/LaxzButton';

function LaxzButton(props) {
  return (
    <TouchableOpacity
      style={{}}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: "#afafaf",
          backgroundColor: "#fafafa",
          height: 50,
          width: 150,
          padding: 10,
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >{props.name}</Text>
    </TouchableOpacity>
  )
}

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LaxzButton name={"日本語 N5"} onPress={() => navigation.navigate("N5 Navigator Screen")} />
      {/* <LaxzButton name={"日本語 N4"} /> */}
      <LaxzButton name={"About"} onPress={() => navigation.navigate("About Screen")} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});