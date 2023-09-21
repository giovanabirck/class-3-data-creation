import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { Button } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {
    const [number, setNumber] = useState(1);

    const check = () => {

        if(number == 1) {
          console.log("ONE");
        } else if(number == 2) {
          console.log("TWO");
        } else if(number == 3) {
          navigation.push('About')
        }
    
        setNumber(number + 1);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Button 
                    title="Click Me"
                    size="lg"
                    onPress={() => check()}
                />
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
    }
});

