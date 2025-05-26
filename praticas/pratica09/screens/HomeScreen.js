import { useContext,useEffect } from "react";
import { View,ActivityIndicator } from "react-native";
import {StoreItem} from "components";
import StoreContext from "../components/StoreContext";
import CategoryItem from "../components/CategoryItem";

function HomeScreen(props){
    const { navigation } = props;
     const {loading,loadStores}=useContext(StoreContext);
     useEffect(() => {
        loadData();
      }, []);
  <View style={{flex:1,marginTop:16,padding:16}}/>
       {loading ? (
        <View
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large"/>
        </View>
       ) : (
        <>
        <CategoryItem/>
        <StoreItem />
        </>
       )}
    <View/>
       }
export default HomeScreen;
