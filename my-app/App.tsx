import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importe suas telas
import Home from "./src/Home";
import Forca from "./src/forca";
import JogoDaVelha from "./src/jogoDaVelha";
import Quadrados from "./src/quadrados";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#666666",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Menu" }}
        />
        <Stack.Screen
          name="Forca"
          component={Forca}
          options={{ title: "Jogo da Forca" }}
        />
        <Stack.Screen
          name="JogoDaVelha"
          component={JogoDaVelha}
          options={{ title: "Jogo da Velha" }}
        />
        <Stack.Screen
          name="Quadrados"
          component={Quadrados}
          options={{ title: "Quadrados" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
