import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';

const ProdutoList = () => {
  const [Produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:19003/produto/')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os Produstos:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}><h2>produto</h2></Text>
      <Text>Todos os Produtos:</Text>
      <FlatList
        data={Produtos}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.horarioItem}>
            <Text style={styles.produtoName}>{item.nome}</Text>
            <Image style={styles.produtoImage} source={{ uri:item.imagem}} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD966',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#black',
    marginBottom: 10,
    textAlign: 'center',
  },
  horarioItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  produtoName: {
    fontSize: 16,
    color: '#333',
  },
  produtoImage: {
    width: 100,
    height: 100, 
  },
});

export default ProdutoList;