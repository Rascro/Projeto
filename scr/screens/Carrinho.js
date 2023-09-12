import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, Text, Animated} from 'react-native';

export default function Carrinho() {
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
        outputRange:[1, 1, 0],
        extrapolate: 'clamp'
       })
      }
      ]}> 
      <Animated.Text style= {{ 
        width: scrollY.interpolate({ 
            inputRange:[0, 180], 
            outputRange: [240,160],
            extrapolate: 'clamp'
            }), fontSize: 30, marginTop: 50, marginLeft: 100 }}> 
      Wonder Bakery
      </Animated.Text>
    </Animated.View>
</View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFD966',
      },
});