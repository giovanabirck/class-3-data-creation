import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/books';
import React from 'react';
import { Button } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About({navigation}) {
    const[data, setData] = useState();

    const addingData = () => {
        console.log("Started")
        setData(bookStore);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Welcome to the Dashboard</Text>
                <Button 
                    title= "Show Data"
                    onPress={() => addingData()}
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
