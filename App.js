import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const[area, setArea] = useState();

  function startCalc(){

    let localArea = calcArea();
    setArea(localArea)
    console.log(area)
  }

  function calcArea(){
      return base * height /2;
      let area = calcArea();

  }


  return (
  
    <View style={styles.container}>
      <Text style = {styles.title}>Háromszög</Text> 


      <Text style = {styles.inputText}>Alap</Text> 
      <TextInput style={styles.input} 
      onChangeText={base => setBase(base)}
      />


      <Text style = {styles.inputText}>Magasság</Text>
      <TextInput style={styles.input} 
      onChangeText={height => setHeight(height)}/>


      <Button title="Számít"
      onPress={startCalc}/>

      <Text style = {styles.inputText}>{area}</Text>
      <TextInput value={area} />

      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{       //létrehoztuk a tömböt, css tulajdonságokat írhatunk bele
    fontSize:44,
    color:'grey',
  },
  inputText:{
    fontSize: 34,
  },
  input:{
    backgroundColor: 'white',
    height: 40,
    fontSize :30,
    width: '80%',
    marginTop: 8,
    borderRadius:5,
  },
  
});
