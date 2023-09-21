import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { Button } from '@rneui/base';

export default function Home({navigation}) {
    const [number, setNumber] = useState(0);

    const check = () => {

        if(number === 0) {
            setActiveStyle({
                backgroundColor: '#EB534C',
          })
        } else if(number == 1) {
            setActiveStyle({
                backgroundColor: '#EB534C',
              })
        } else if(number == 3) {
          navigation.push('About')
        }
    
        setNumber(number + 1);
    }

    return (
            <View style={styles.container}>
                <Button 
                    title="Click Me"
                    size="lg"
                    onPress={() => check()}
                    buttonStyle= {{
                        alignItems: 'center',
                        backgroundColor: '#000' ? '#EB534C' : '#fff',
                        borderRadius: 8,
                        padding: 8
                    }}
                    // containerStyle= {
                    //     number === 1 ? styles.btnBlack : 
                    //     number === 2 ? styles.btnPink : styles.btnWhite
                    // }
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
    },
    btnBlack: {
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 10,
    },
    btnPink: {
        alignItems: 'center',
        backgroundColor: '#EB534C',
        borderRadius: 8,
        padding: 10,
    },
    btnWhite: {
        alignItems: 'center',
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
    }
});

