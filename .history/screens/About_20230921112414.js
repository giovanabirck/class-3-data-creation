import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bookStore } from '../data/books';
import React from 'react';
import { Button } from '@rneui/base';

export default function About({navigation}) {
    const[data, setData] = useState();

    const addingData = () => {
        console.log("Started")
        setData(bookStore);
    }

    return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to the Dashboard!</Text>
                <Button
                size="lg" 
                    title= "Show Data"
                    onPress={() => addingData()}
                    buttonStyle={{
                        alignItems: 'center',
                        backgroundColor: '#000',
                        borderRadius: 8,
                        padding: 8,
                    }}
                />

                {
                    data && data.books.map((b, index) => {

                        if(b.category.toLowerCase() == 'java') {
                            return(
                                <View key={index}>
                                    <Text>{b.title}</Text>
                                    {
                                        b.authors && b.authors.map((a, ind) => {
                                            return(
                                                <View key={ind}>
                                                    <Text>{a}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        }
                    })
                }
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 32,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
