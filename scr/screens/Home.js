import React, {useState} from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, View, Text, Animated} from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import api from '../service/api';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function CardProduto () {
  <Card style={{ backgroundColor: '0D131A' }}>
    <Card.Title title="Comida" subtitle="Ingredientes" left={LeftContent} />
    <Card.Content>
      <Card.Cover source={{uri: 'https://guiadacozinha.com.br/wp-content/uploads/2020/01/10-comidas-inspiradas-no-tema-Pokémon-hambúrguer-Pikachu.jpg' }} />
      <Text variant="bodyMedium">Conteudo sobre a comida</Text>
    </Card.Content>
  </Card>
}

export default function Home ({navigation}) {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <View>
    <Animated.View style={[styles.header,
      {
        height: scrollY.interpolate({
        inputRange:[ 40, 120, 140 ],
        outputRange: [ 140, 20, 0 ],
        extrapolate: 'clamp'
      }),
       opacity: scrollY.interpolate({
        inputRange:[1, 75, 170],
        outputRange:[1, 0.5, 0],
        extrapolate: 'clamp'
       })
      }
      ]}> 
      <Animated.Text style= {{ 
        width: scrollY.interpolate({ 
            inputRange:[0, 180], 
            outputRange: [240,160],
            extrapolate: 'clamp'
            }), fontSize: 30, marginTop: 50, marginLeft: 100,
            opacity: scrollY.interpolate({
                inputRange:[1, 75, 170],
                outputRange:[1, 1, 0],
                extrapolate: 'clamp'
               })
        }}
            
            
            > 
      Wonder Bakery
      </Animated.Text>
    </Animated.View>
    <ScrollView 
    scrollEventThrottle={16}
    style={styles.scrollView} onScroll={Animated.event([{
        nativeEvent: {
            contentOffset: { y: scrollY }
        },
    }],
    { useNativeDriver: false })}
    >
      <CardProduto />
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffff',
  },
  card: {
    backgroundColor: '#B59D68',
  },
  header: {
    backgroundColor: '#FFD966',
  },

});