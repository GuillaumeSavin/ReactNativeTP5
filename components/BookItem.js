import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from "react-native-paper";

const styles = StyleSheet.create({
    bookitem :
    {
        marginTop: 30
    }
});

class BookItem extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.livre.title;
        this.style = props.livre.style;
    }
    render() {
        return (
                <Card style={ styles.bookitem } variant="outlined" elevation={3}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700'}} />
                    <Card.Content>
                        <Title>{ this.title }</Title>
                        <Paragraph> { this.style }</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Annuler</Button>
                        <Button>Valider</Button>
                    </Card.Actions>
                </Card>
        );
    }
}
export default BookItem;