import { SafeAreaProvider } from "react-native-safe-area-context";
import {ChatScreen} from "./screens/ChatScreen";
import ProfileSceen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

function SettingsScreen(){
  return <SafeAreaProvider>
 
     <SettingsScreen/>

</SafeAreaProvider>;
}
export default SettingsScreen;

