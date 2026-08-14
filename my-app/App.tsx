import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
--dsadsadsadsadsa;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coluna}>
        <View style={styles.animal}>
          <Text style={styles.Textos}>Cachorro</Text>
        </View>
        <View style={[styles.animal, styles.macaco]}>
          <Text style={styles.Textos}>macaco</Text>
        </View>
      </View>
      <View style={styles.coluna}>
        <View style={styles.animal}>
          <Text style={styles.Textos}>Cachorro</Text>
        </View>
        <View style={styles.animal}>
          <Text style={styles.Textos}>Cachorro</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff000",
  },
  coluna: {
    flex: 1,
    flexDirection: "column",
  },
  animal: {
    flex: 1,
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
  },
  macaco: {
    backgroundColor: "#123456",
  },
  Textos: {
    fontSize: 25,
  },
});
