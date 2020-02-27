import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button
} from "react-native";

export default function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image
        source={{
          uri:
            "https://www.freepngimg.com/thumb/burger/6-2-burger-png-image-thumb.png"
        }}
        style={{ width: 230, height: 230, marginBottom: 25 }}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert(
            "Your username is " +
              username +
              ", and your password is " +
              password
          );
        }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginBottom: 86
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },
  input: {
    backgroundColor: "#eeeeee",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    fontSize: 18
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    backgroundColor: "#2196f3"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center"
  }
});