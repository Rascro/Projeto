import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { useSetRecoilState } from "recoil";
import { authState, useAuth } from "../recoil/atoms/auth";

export default function Login({ navigation }) {
  const { setToken } = useAuth();
  const { auth } = useAuth();
  const setAuth = useSetRecoilState(authState);
  const [nome, setNome] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const login = async () => {
    try {
      const { data } = await api.post("token/", {
        nome: nome,
        senha: senha,
      });

      await setToken(data.access);

      setAuth({
        isLogged: true,
        token: data.access,
        refresh: data.refresh,
        userID: data.userId,
      });
      console.log(auth);
      await SecureStore.setItemAsync("access", data.access);
    } catch (error) {
      setAuth({ isLogged: false, token: null, refresh: null, userID: null });
      setErrorMsg("Email ou senha inválidos!");
      await SecureStore.deleteItemAsync("access");
    }
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [40, 120, 140],
              outputRange: [140, 20, 0],
              extrapolate: "clamp",
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Animated.Text
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 180],
              outputRange: [240, 160],
              extrapolate: "clamp",
            }),
            fontSize: 30,
            marginTop: 50,
            marginLeft: 100,
          }}
        >
          Wonder Bakery
        </Animated.Text>
      </Animated.View>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="rgba(0,0,0,0.5)"
        value={nome}
        onChangeText={setNome}
        autoCapitalize={"none"}
      />
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.passwordTextInput}
          placeholder="Senha"
          placeholderTextColor="rgba(0,0,0,0.5)"
          value={senha}
          onChangeText={setSenha}
          autoCapitalize={"none"}
        />
        <Text>{errorMsg}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.login}
          onPress={() => login()}
        >
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#FFD966",
  },
});
