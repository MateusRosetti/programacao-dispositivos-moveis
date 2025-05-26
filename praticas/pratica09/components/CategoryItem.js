import { FlatList,View } from "react-native";
import { Button,Text } from "react-native-paper";

    function CategoryItem({ item}){
    
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
<View>
  <Text variant="titleMedium">Categorias</Text>
  <FlatList
    	style={{ marginBottom: 8 }}
    	data={categories}
    	horizontal
    	showsHorizontalScrollIndicator={false}
    	renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 4 }}>
          <Button mode="outlined" icon={item.icone} onPress={() => {}}>
            {item.nome}
          </Button>
        </View>
    	)}
    	keyExtractor={(item, index) => `categoria-${index}`}
  />
</View>


   export default CategoryItem;

   