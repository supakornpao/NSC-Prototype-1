import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, Image} from 'react-native'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import { ScreenHeaderBtn } from '../components'

const Information = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const router = useRouter();

    return (
        <SafeAreaView style={{flex:1, backgroundColor: "#ADD8E6"}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100" />
                    ),
                    headerTitle: ""
                }}
            />
            <Text style={[styles_head.text_big, {marginTop: 50}]}>Information</Text>
            
            <View style = {styles_normal.frame}>
            <Text style={[styles_head.text_small]}>มะเร็งผิวหนังชนิด Malignant Melanoma</Text>
            </View>

            <ScrollView styles={styles_head.container}>
            <Text style={[styles_normal.text]}>
            1. อุบัติการณ์แนวโน้มทั้งในประเทศและระดับโลก            มะเร็งผิวหนังชนิด Malignant Melanoma นี้ เป็นมะเร็งผิวหนังที่พบได้น้อย แต่มีความรุนแรงมาก โดยเป็นสาเหตุการตายถึง 75% ของผู้ป่วยมะเร็งผิวหนังทั้งหมด โดยทั่วไปพบผู้ป่วยมะเร็งผิวหนังชนิดได้ถึงปีละ 160,000 รายทั่วโลก ส่วนใหญ่เป็นในประชากรผิวขาว สำหรับประชากรไทยพบโรคมะเร็งผิวหนังชนิดนี้ได้น้อย

2. ปัจจัยเสี่ยงในการเกิดโรค          ปัจจุบันนี้พบโรคมะเร็งผิวหนังได้บ่อยมากขึ้น สาเหตุเกิดจากสภาวะแวดล้อมที่เปลี่ยนแปลงไป โดยปัจจัยส่งเสริมให้เกิดมะเร็งผิวหนังมีดังนี้                    - โรคทางพันธุกรรมบางโรค                     - คนผิวขาว หรือคนเผือก                    - แสงแดด                    - สารเคมี เช่น สารหนู (Arsenic)                    - ไวรัสหูด (human papilloma virus)   บางชนิด                    - แผลเรื้อรัง                    - การได้รังสีรักษา                    - ภาวะภูมิต้านทานต่ำ                    - การสูบบุหรี่
3. อาการและอาการแสดง          พบในผู้ป่วยเพศหญิงมากกว่าเพศชายเล็กน้อย ผู้ป่วยมักอยู่ในอายุระหว่าง 50 – 70 ปี มะเร็งผิวหนังชนิดนี้เกิดที่ตำแหน่งใดบนร่างกายก็ได้ อาจพบบริเวณผิวหนังที่ถูกแสงแดดเป็นประจำหรือ
ไม่ก็ได้ โดยมีลักษณะเป็นตุ่มหรือก้อนสีดำเข้ม แต่ก็พบมีหลายสีได้ ตั้งแต่สีดำ แดง ชมพู น้ำตาล เทา โดยสีของมะเร็งผิวหนังจะกระจายบนก้อน ไม่สม่ำเสมอกัน ในคนไทยมักพบมะเร็งผิวหนังชนิดนี้ที่ฝ่ามือฝ่าเท้าได้ถึงร้อยละ 50 มะเร็งผิวหนังชนิดนี้มักเกิดบนตำแหน่งที่เป็นไฝเดิม แล้วมีลักษณะเปลี่ยนแปลงไป หรือเป็นไฝที่เกิดขึ้นมาใหม่ โดยไฝเหล่านี้จะมีลักษณะขอบเขตไม่ชัดเจน มีสีไม่สม่ำเสมอ   มีเส้นผ่าศูนย์กลางขนาดใหญ่กว่า 6 มิลลิเมตร
4. การวินิจฉัย          การวินิจฉัยมะเร็งผิวหนังชนิดนี้สามารถทำได้โดยตัดชิ้นเนื้อบางส่วน หรือทั้งหมดของรอยโรคเพื่อส่งตรวจทางพยาธิวิทยา
5. การตรวจเพิ่มเติมเพื่อช่วยในการวินิจฉัย          ไม่มี
6. การรักษา          - การผ่าตัด          การผ่าตัดเป็นวิธีการรักษาที่เป็นมาตรฐาน โดยจะต้องทำการผ่าตัดทั้งรอยโรคและผิวหนังปกติที่อยู่รอบรอยโรคนั้นออกอย่างน้อย 1-2 เซนติเมตรโดยรอบ          - การให้ยาเคมีบำบัด          การให้ยาเคมีบำบัดสำหรับมะเร็งผิวหนังชนิดนี้ เป็นวิธีการรักษาร่วมกับการผ่าตัด โดยเฉพาะในกรณีที่โรคมะเร็งผิวหนังเป็นชนิดรุนแรง หรือมีการแพร่กระจายไปยังอวัยวะอื่น ๆ           - การให้รังสีรักษา          จะใช้ในกรณีที่ผู้ป่วยไม่สามารถเข้ารับการผ่าตัดได้ หรือเป็นการรักษาร่วมกับการผ่าตัด 
7. การติดตามผลการรักษา          ผู้ป่วยควรมารับการตรวจติดตามผลการรักษาทุก 3-6 เดือน เพื่อประเมินการกลับเป็นซ้ำ หรือการมีมะเร็งผิวหนังเกิดขึ้นใหม่ในตำแหน่งอื่นอีก
8. การตรวจคัดกรอง          กรณีที่ผู้ป่วยมีความเสี่ยงต่อการเกิดมะเร็งผิวหนังชนิดนี้ หรือมีญาติที่เคยเป็นโรคมะเร็งผิวหนังชนิดนี้ หรือมีไฝที่น่าสงสัยว่าจะกลายเป็นมะเร็งผิวหนัง ควรมารับการตรวจโดยแพทย์ผิวหนังทุก 6 เดือน เมื่อพบรอยโรคที่สงสัยว่าจะเป็นมะเร็งผิวหนัง ควรส่งรอยโรคทางผิวหนังดังกล่าว เพื่อรับการตรวจทางพยาธิวิทยาต่อไป
            </Text>
            </ScrollView>

            <TouchableOpacity style={styles_normal.button} onPress={() => router.push('/')}>
                    <Text style={styles_head.text_small}>Back</Text>
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
    text_big: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationColor: '#008631'
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
        alignItems: 'center',
        padding: 10,
        margin: 5,
    },
    frame:{
        width: 95 * 4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#53CFFB',
        margin: 10,

        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
    },
    text: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center',
    },
    button: {
        width: 40 * 4,
        height: 20,
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
    }
    })

    Information.id = 'Information';

export default Information;