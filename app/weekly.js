import { SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES , wallpaper} from '../constants'
import { ScreenHeaderBtn } from '../components'
import { GestureHandlerRootView, ScrollView, Text } from 'react-native-gesture-handler';
import { StyleSheet, View, Image } from 'react-native';

const Weekly = () => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor: "#ADD8E6"}}>
            <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite},
                        headerTitle: "Weekly Report"
                    }}
            />
            <Text style={[styles_head.text_big, {marginTop: 30}]}>Weekly Report</Text>
            <GestureHandlerRootView>
                <ScrollView style={{marginTop:40}}>
                <View style={[BoxStyle.frame]}>
                    <Image
                        style={BoxStyle.smallphoto}
                        source={require('../assets/images/250px-Melanoma.jpg')}
                    />
                </View>
                <View style={[BoxStyle.frame]}>
                    <Image
                        style={BoxStyle.smallphoto}
                        source={require('../assets/images/250px-Melanoma.jpg')}
                    />
                </View>
                </ScrollView>
            </GestureHandlerRootView>
            
        </SafeAreaView>
    );
}


const styles_head = StyleSheet.create({
    text_big: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    }})

const BoxStyle = StyleSheet.create({
    container: {
        width:500,
        height:200,
        color: 'white'
    },
    frame:{
        width: 90 * 4,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1F8FF',
        margin: 10,

        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    smallphoto:{
        borderRadius: 20,
        width: 250,
        height: 150,
        
    }
})

export default Weekly;