import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Provider as PaperProvider,
  Appbar,
  TextInput,
  Button
} from "react-native-paper";
import axios from "axios";

export default function CreateBlogScreen(props) {
  const [article, setArticle] = useState("");
  const [content, setContent] = useState("");

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Action
          icon="chevron-left"
          onPress={() => props.navigation.goBack()}
        />
        <Appbar.Content title="New Article" />
      </Appbar.Header>
      <View style={{ padding: 15 }}>
        <TextInput
          label="Title"
          value={article}
          onChangeText={text => setArticle(text)}
        />
        <TextInput
          style={{ marginTop: 15, height: 150, justifyContent: "flex-start" }}
          label="Content"
          value={content}
          onChangeText={text => setContent(text)}
          numberOfLines={10}
          multiline={true}
        />
        <Button
          style={{ marginTop: 15 }}
          mode="contained"
          onPress={() => {
            axios
              .post("https://ancient-reaches-80096.herokuapp.com/blog/", {
                title: article,
                content: content
              })
              .then(data => {
                props.navigation.goBack();
              });
          }}
        >
          Create Article
        </Button>
      </View>
    </PaperProvider>
  );
}
