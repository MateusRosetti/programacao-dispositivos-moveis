import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {CategoryScreen ,StoreScreen} from "screens"

const {Stack}= createNativeStackNavigator()

function SearchNavigator(){
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Categorias" component={CategoryScreen} />
    <Stack.Screen name="Lojas" component={StoreScreen} />
</Stack.Navigator>


}
export default SearchNavigator