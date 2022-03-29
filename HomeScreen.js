import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen=({navigation})=>{
    const [name,setName]=useState('');
    const [age,setAge]=useState('');

    useEffect(()=>{
        getData();
    },[]);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }
    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('welcome');
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <View >
            <Text>{name}</Text>
            <Text>{age}</Text>
           <TextInput
            placeholder='Enter Name'
            style={Styles.txtName}
            onChangeText={(value)=>setName(value)}/>
            <TextInput
            placeholder='Enter Age'
            style={Styles.txtName}
            onChangeText={(value)=>setAge(value)}/>

            <Button title='Update'
               onPress={updateData}/>
            <Button title='Remove'
              onPress={removeData}/>
        </View>
    )

}
export default HomeScreen;
const Styles=StyleSheet.create({
   
    txtName:{
        borderColor: '#555',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
        width:250,
        marginBottom:10,
        marginTop:10
    }
})