import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import { ScreenHeaderBtn } from '../components'

const Home = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const router = useRouter();

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.gray2}}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100" />
                ),
                headerTitle: ""
            }}
        
        />
            <Text style={[styles_head.text, { marginBottom: 80, marginTop: 100}]}>Skin Cancer Detector</Text>
            
            <TouchableOpacity style={styles_normal.button} onPress={onPress}>
                <Text style={[styles_normal.text,{ marginBottom: 50}]}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles_normal.button} onPress={onPress}>
                <Text style={[styles_normal.text,{ marginBottom: 50}]}>Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles_normal.button} onPress={onPress}>
                <Text style={[styles_normal.text,{ marginBottom: 50}]}>Quit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles_head = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationColor: '#008631'
    },
    })

const styles_normal = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#88E788',
        padding: 5,
        marginVertical: 40,

    }
    })

export default Home;