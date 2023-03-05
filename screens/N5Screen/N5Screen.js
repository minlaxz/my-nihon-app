import { Button, StyleSheet, Text, View } from 'react-native';

export default function N5Screen({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Main Menu"/>
      <Text>
        Here is the content of N5
      </Text>
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