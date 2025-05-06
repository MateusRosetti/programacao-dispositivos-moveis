import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import ChatScreen from "../screens/ChatScreen";
import CallScreen from "../screens/CallScreen";
import ContactScreen from "../screens/ContactScreen";

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator(){
<View style={{flex:1,paddingTop:24}}>
    <Tab.Navigator>
        <Tab.Screen name="conversas" component={ChatScreen}/>
        <Tab.Screen name="Ligaçoes" component={ChatScreen}/>
        <Tab.Screen name="Contatos" component={ChatScreen}/>
    </Tab.Navigator>
</View>        

}
export default TopTabNavigator;