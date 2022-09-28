import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';

const list = [
  {
    id: 1,
    label: 'Conta a pagar 1',
    value: '140,90',
    date: '17/09/2022',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'venda de algo',
    value: '780,00',
    date: '17/09/2022',
    type: 1 //entrada / receita
  },
  {
    id: 3,
    label: 'Salario',
    value: '4.180,00',
    date: '17/09/2022',
    type: 1 //entrada / receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Gael Barreto"/>

        <Balance saldo="9.500,00" gastos="527,00"/>

        <Text style={styles.title}>Ultimas Movs</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Moviments data={item} />}
        />        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
  

});
