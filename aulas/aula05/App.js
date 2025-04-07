import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./screens/taskScreen";
function App(){
  return(
    <SafeAreaProvider>
      <TaskScreen></TaskScreen>
    </SafeAreaProvider>
  );
}
export default App;