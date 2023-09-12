import React, {useState} from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Login () {
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <View style={styles.container}>
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
    
    <TextInput
      label="Email"
      value={usuario}
      onChangeText={text => setUsuario(text)}
    />
    <TextInput
      label="Senha"
      value={senha}
      onChangeText={text => setSenha(text)}
    />
    <Button color='#0D131A'  mode="elevated" onPress={() => navigation.navigate('')}>
    Confirmar
    </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#FFD966',
  },
});