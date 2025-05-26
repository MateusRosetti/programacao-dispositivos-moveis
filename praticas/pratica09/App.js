import { SafeAreaProvider } from "react-native-safe-area-context";
import { StoreContext } from "./components/StoreContext";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes/MainNavigator";


function App() {
  return(
    <SafeAreaProvider>
<StoreContext>
  <NavigationContainer>
    <MainNavigator>
      
    </MainNavigator>
  </NavigationContainer>
</StoreContext>
    </SafeAreaProvider>
  );
}
export default App;
  
