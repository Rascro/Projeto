import React from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./scr/screens/Home";
import Login from "./scr/screens/Login";
import Carrinho from "./scr/screens/Carrinho";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
            <Tab.Screen name="Login" component={Login} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
}
