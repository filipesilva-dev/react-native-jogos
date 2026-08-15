import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="🎯 Forca" onPress={() => navigation.navigate("Forca")} />
      <Button
        title="❌ Jogo da Velha"
        onPress={() => navigation.navigate("JogoDaVelha")}
      />
      <Button
        title="🔲 Quadrados"
        onPress={() => navigation.navigate("Quadrados")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20, // espaço entre os botões
  },
});
