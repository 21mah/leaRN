import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Alert,
  AsyncStorage
} from "react-native";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Image
        source={{
          uri:
            "https://static.wixstatic.com/media/2cd43b_8e8fb8f9f1b94554947a74ea53f53741~mv2.png?dn=file"
        }}
        style={{ width: 230, height: 230, marginBottom: 25 }}
      />
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          padding: 15,
          backgroundColor: "#eeeeee",
          marginBottom: 15,
          width: "100%"
        }}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          padding: 15,
          backgroundColor: "#eeeeee",
          marginBottom: 15,
          width: "100%"
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        title="Log In"
        onPress={async () => {
          if (email === "a@b.c" && password === "123") {
            await AsyncStorage.setItem("isLoggedIn", "true");
            props.navigation.navigate("Home");
          } else {
            Alert.alert("Login Gagal", "Email atau password anda salah!");
          }
        }}
      />
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
