import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image, ImageBackground} from 'react-native'
import { Stack, useRouter } from 'expo-router'
//import {} from 'react-native-executorch'
import { COLORS, icons, images, SIZES , wallpaper} from '../constants'
import { ScreenHeaderBtn } from '../components'


const Report = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const router = useRouter();

    return (
        <ImageBackground source={require("../assets/images/wallpaper.jpg")} style={{flex:1}}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite},
                        headerTitle: ""
                    }}
                />
                <Text style={[styles_head.text_big, {marginTop: 50}]}>Result for Scanning</Text>
                
                <View style={[styles_normal.frame, {width: 200, justifyContent: 'space-evenly',alignItems: 'flex-start'}]}>
                    <Text style={[styles_normal.text]}>  Risk: High</Text>
                </View>

                <View style={[styles_normal.frame, {width: 300, alignItems: 'center'}]}>
                    <Text style={[styles_normal.text]}>Explanation</Text>
                </View>

                <View style={[styles_normal.frame_big, {alignItems: 'center'}]}>
                    <Text style={styles_normal.smalltext}>หลังจากการประมวลผลด้วยชุดข้อมูลของเรา ตรวจพบได้ว่าภาพนี้มีความเป็นไปได้ในการเป็นมะเร็งผิวหนังประเภท Malignant Melanoma สูง ควรรีบไปพบแพทย์หรือผู้เชี่ยวชาญเพื่อการตรวจสอบที่เที่ยงตรงมากกว่า</Text>
                    
                </View>
                
                <View style={[styles_normal.frame, {width: 380, alignItems: 'flex-start'}]}>
                    <Text style={styles_normal.smalltext}>   Surveillance period:  3-5 Days</Text>
                </View>

                <TouchableOpacity style={[styles_normal.button, {marginHorizontal: 10, marginTop: 60}]} onPress={() => router.push('/')}>
                        <Text style={styles_head.text_small}>Back</Text>
                </TouchableOpacity>
        </ImageBackground>
    )
}

const styles_head = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_big: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    text_small: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationColor: '#FFFB8F'
    }
    })

const styles_normal = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 10,
        margin: 5,
    },
    frame:{
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#F5E6A9',
        margin: 10,

        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
    },
    frame_big:{
        width: 380,
        height: 180,
        justifyContent: 'center',
        backgroundColor: '#F5E6A9',
        margin: 10,

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    text: {
        fontSize: 30,
        fontWeight: 'Bold',
        textAlign: 'center',
    },
    smalltext:{
        fontSize: 20,
        fontWeight: 'Bold',
        textAlign: 'left',
    },
    button: {
        width: 40 * 4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5E6A9',
        
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    image:{
        width: 400,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5E6A9',
        margin: 10,
    },
    wallpaper:{
        flex: 1,
        justifyContent: 'center'
    }
    })

Report.id = 'Report';

export default Report;