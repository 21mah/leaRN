import React from "react";
import { FlatList, Alert, View } from "react-native";
import {
  Provider as PaperProvider,
  Appbar,
  List,
  ActivityIndicator
} from "react-native-paper";

import useBlogs from "../utils/useBlogs";

export default function HomeScreen(props) {
  const { blogs, toggleBlog, fetchBlogs, deleteBlog, loading } = useBlogs();

  // Fetch all blogs when app started
  props.navigation.addListener("didFocus", () => {
    fetchBlogs();
  });

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Articles" />
        <Appbar.Action
          icon="plus"
          onPress={() => props.navigation.navigate("CreateBlog")}
        />
      </Appbar.Header>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator animating={true} size={32} />
        </View>
      ) : (
        <FlatList
          refreshing={loading}
          onRefresh={fetchBlogs}
          data={blogs}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <List.Accordion title={item.title}>
              <List.Item
                style={{ marginLeft: 50 }}
                left={props => <List.Icon {...props} icon="information" />}
                title="Detail"
                onPress={() => {
                  props.navigation.navigate("DetailScreen", { item });
                }}
              />
              <List.Item
                style={{ marginLeft: 50 }}
                left={props => <List.Icon {...props} icon="delete" />}
                title="Delete"
                onPress={() => deleteBlog(item.id)}
              />
            </List.Accordion>
          )}
        />
      )}
    </PaperProvider>
  );
}
