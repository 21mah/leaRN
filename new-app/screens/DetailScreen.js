import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar, Provider as PaperProvider } from "react-native-paper";
// import moment from "moment";

export default function DetailScreen(props) {
  const blog = props.navigation.getParam("item");
  // var moment = require("published_at");
  var date = blog.published_at;

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Action
          icon="chevron-left"
          onPress={() => props.navigation.goBack()}
        />
        <Appbar.Content title="Detail" />
      </Appbar.Header>
      <View>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.content}>{blog.content}</Text>
        <Text style={styles.date}>Date Published: {blog.published_at}</Text>
        {/* <Text style={styles.date}>Date Published: {date}</Text> */}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10
  },
  content: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "justify"
  },
  date: {
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
  }
});
