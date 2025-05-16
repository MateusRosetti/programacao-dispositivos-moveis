import { createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignUpScreen from "../screens/SignUpScreen";
import StackNavigator from "../../pratica08/routes/StackNavigator";

const Stack = createNativeStackNavigator();

function StackNavigator(){

    <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="RecuperarSenha"
    component={ForgotPasswordScreen}/>
        <Stack.Screen name="CriarConta" component={SignUpScreen}/>
    </Stack.Navigator>
}
export default StackNavigator;