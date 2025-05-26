import { useContext } from "react";
import { FlatList,View } from "react-native";
import { List,Text, } from "react-native-paper";
import StoreContext from "./contexts";

function StoreItem({ item }) {

<View>
<Text variant="titleMedium">lojas</Text>
<FlatList
    data={stores}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>(
        <List.Item
           title={`${item.nome}-${item.endereco}`}
           description={`* ${item.nota}•${item.categoria}`}
           right={(props) => (
            <List.Icon {...props}icon="heart-outline"
    onPress={()=>{}}/>
           )}
        />
    )}
    keyExtractor={(item,index)=> `loja-${index}`}
    />
</View>


        const { stores } = useContext(StoreContext);
      
        return (
          <div>
            <h1>Lojas:</h1>
            {stores.length === 0 ? (
              <p>Nenhuma loja encontrada.</p>
            ) : (
              <ul>
                {stores.map(store => (
                  <li key={store.id}>{store.name} - {store.categoria}</li>
                ))}
              </ul>
            )}
          </div>
        );
      }
      
    
export default StoreItem;
