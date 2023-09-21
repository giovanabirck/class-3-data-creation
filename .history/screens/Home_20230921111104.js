import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { Button } from '@rneui/base';

export default function Home({navigation}) {
    const [number, setNumber] = useState(0);

    const check = () => {

        if(number === 0) {
            setStyle({
                backgroundColor: '#EB534C',
                borderRadius: 8,
                padding: 8
            })
        } else if(number == 1) {
            setStyle({
                backgroundColor: '#fff',
                borderRadius: 8,
                padding: 8
            })
        } else if(number == 2) {
          navigation.push('About')
        }
    
        setNumber(number + 1);
    }

    const [style, setStyle] = useState({
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 8
        color
    });

    return (
            <View style={styles.container}>
                <Button 
                    title="Click Me"
                    size="lg"
                    onPress={() => check()}
                    buttonStyle= {style}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

