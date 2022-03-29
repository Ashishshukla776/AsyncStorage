import React from 'react';

import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
//import AddTask from './screens/addtask';

//import { Provider } from "react-redux";
//import store from './store/store';

const Tab=createBottomTabNavigator();


const App=()=>{
 return(

      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='welcome' component={LoginScreen}/>
            <Tab.Screen name='Home' component={HomeScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
   
  )
}
export default App;