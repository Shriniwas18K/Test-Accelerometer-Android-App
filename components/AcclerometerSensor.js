import { useState } from 'react'
import {Accelerometer} from 'expo-sensors'
import { Pressable,Text,StyleSheet } from 'react-native'


{/******************************************************
*
*  This code checks wheter accelerometer device api
*  is accessible for the app
*  This kind of commenting is java-doc style
*
  ******************************************************/}

  
export default function AccelerometerSensor(){
    const [permissionStatus,
        setPermissionStatus]=useState(false)
  
    const _permissionreq=()=>{
        setPermissionStatus(
            Accelerometer.getPermissionsAsync()
        )
    }
    return (
        <>
        {!permissionStatus ? (
            <Pressable onPress={_permissionreq} 
             style={styles.reqbutton}>
                 <Text style={styles.txt}>
                    Request Accelerometer to device
                 </Text>
            </Pressable>
        ):  <Text style={styles.txt}>
                Permission object recieved from device
                {
                    JSON.stringify(permissionStatus)
                }
            </Text>
        }
        </>    
    )    
}

const styles=StyleSheet.create({
    reqbutton:{
        padding:18,
        borderRadius:10,
        backgroundColor:'green'
    },
    txt:{
        color:'white',
        fontSize:18,
        padding:37
    }
})