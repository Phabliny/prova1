import { FlatList, Text, View } from "react-native";
import {numberFormat} from "../services/numberFormat"
export const Cart = ({ items, getTotalPrice }) => {

  const calculaValor = (quantidade, preco) => {
    return (quantidade * preco)
  }

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => {
        return (
          <View style={{margin: 10}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', textAlignVertical: 'center', marginBottom:10}}>
              <Text style={{ fontSize: 20 }}>{item.product.name} x {item.qty}</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{numberFormat(calculaValor(item.qty, item.product.price))}</Text>
            </View>
          </View>
         )}}
      ListFooterComponent = {() => 
        <View style={{margin: 10}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', textAlignVertical: 'center'}}>
            <Text style={{ fontSize: 20}}>Total</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{numberFormat(getTotalPrice())}</Text> 
          </View>
        </View>}
/>)

};

