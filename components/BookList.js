import {FlatList} from "react-native";
import BookItem from "./BookItem";
import React from 'react';


class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.livres = this.props.list;

    }

    render() {
        return (

            <FlatList
                data={ this.livres }
                renderItem={ ({ item }) => (<BookItem livre={ item }/> ) }
            />
        );
    }
}
export default BookList;