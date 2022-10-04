import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Moviments({ data }) {

  const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity style={styles.container} 
            onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
      <Text style={styles.label}>{data.label}</Text>

      {showValue ? (
        <Text 
      style={data.type === 1 ? styles.value : styles.expenses}
        > {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}` }      
      </Text>
      ) : (
        <View style={styles.skeleton}>

        </View>
      )
}
    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginBottom: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA'
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  date:{
    color: '#DADADA',
    fontWeight: 'bold'
  },
  label:{
    fontWeight: 'bold',
    fontSize: 16
  },
  value:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2ecc71'
  },
  expenses:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e74c3c'
  },
  skeleton:{
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 8
  }

})