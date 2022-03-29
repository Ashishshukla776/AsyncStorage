import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen=({navigation})=>{

    const [name,setName]=useState('');
    const [age,setAge]=useState('');

    useEffect(()=>{
        getData();
    },[]);

    const getData=()=>{
        try{
            AsyncStorage.getItem('UserData')
            .then(value=>{
                if(value!=null){
                    navigation.navigate('Home');
                }
            })
        }catch(error){
            console.log(error);
        }
    }
    const setData= async () => {
        if(name.length==0||age.length==0){
            Alert.alert('Please enter data')
        }else{
            try{
                let user={
                    Name:name,
                    Age:age
                }
                await AsyncStorage.setItem('UsarData',JSON.stringify(user));
                navigation.navigate('Home');
            }catch(error){
                console.log(error);
            }
        }
    }
    return(
        <View style={Styles.viewLogin}>
           
            <TextInput
            placeholder='Enter Name'
            style={Styles.txtName}
            onChangeText={(value)=>setName(value)}/>
            <TextInput
            placeholder='Enter Age'
            style={Styles.txtName}
            onChangeText={(value)=>setAge(value)}/>

       <TouchableOpacity
        style={Styles.button}
        onPress={setData}>
        <Text>Login</Text>
      </TouchableOpacity>
            
        </View>
    )
}
export default LoginScreen;

const Styles=StyleSheet.create({
    viewLogin:{
        flex:1,
        
        alingItems:'center'
    },
    txtName:{
        borderColor: '#555',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
        width:250,
        marginBottom:10,
        marginTop:10
    },
    button:{
        alignItems: "center",
        backgroundColor: "#2196F3",
        padding: 10 ,
        maxWidth:60,
        
    }
    
})