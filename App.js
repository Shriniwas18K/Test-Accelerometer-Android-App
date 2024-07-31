import { 
  StatusBar,StyleSheet,
  View,Text,
} from "react-native";
import AccelerometerSensor from "./components/AcclerometerSensor";


export default function App(){
  return(
    <View style={styles.container}>
        <Text style={styles.title}>
          Testing your device.Thank you for patience.
        </Text>
        <AccelerometerSensor/>
        <StatusBar/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#25292e',
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    padding:18
  }
})