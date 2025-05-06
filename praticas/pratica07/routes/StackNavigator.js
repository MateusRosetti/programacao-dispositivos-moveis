import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RecoverScreen from "../screens/RecoverScreen";

const Stack = createNativeStackNavigator();

function StackNavigator(){

    <Stack.Navigator initialRouteName="login">
       <Stack.Screen name="login" component={LoginScreen}/>
       <Stack.Screen name="recuperarSenha" component={RecoverScreen}/> 
    </Stack.Navigator>
}
export default StackNavigator;