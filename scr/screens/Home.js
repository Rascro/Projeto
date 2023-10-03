import React, {useState, useEffect, useCallback} from 'react';
import { ScrollView, RefreshControl, StyleSheet, View, Animated} from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import ProdutoList from '../components/ProdutosList';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Home ({navigation}) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [refreshing, setRefreshing] = useState(false);
  const [imagen, setImagens] = useState([]);

  

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
      <ProdutoList/>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffff',
  },
  header: {
    backgroundColor: '#FFD966',
  },

});