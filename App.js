import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import BookItem from "./components/BookItem";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import BookList from "./components/BookList";

const livres = [{ 'title': 'Dune', 'style': 'SF' }, { 'title': 'Belgeriade', 'style': 'Fantasy' }]
const styles = StyleSheet.create({
    app :
        {
            backgroundColor: "#00008b",
            flex: 1,
            padding: 10,

        }
});

export default function App() {
  return (
    <View style={ styles.app }>
      <BookList list={ livres } />
    </View>
  );
}


