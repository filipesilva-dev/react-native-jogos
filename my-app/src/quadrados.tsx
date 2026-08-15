import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Quadrados() {
  return (
    <View style={styles.container}>
      <View style={styles.coluna}>
        <View style={[styles.animal, styles.cachorro]}>
          <Image
            source={require("../assets/img/cachorro.png")}
            style={styles.img}
          />
          <Text style={styles.Textos}>Cachorro</Text>
        </View>
        <View style={[styles.animal, styles.macaco]}>
          <Image
            source={require("../assets/img/macaco.png")}
            style={styles.img}
          />
          <Text style={styles.Textos}>Macaco</Text>
        </View>
      </View>
      <View style={styles.coluna}>
        <View style={[styles.animal, styles.pato]}>
          <Image
            source={require("../assets/img/pato.png")}
            style={styles.img}
          />
          <Text style={styles.Textos}>Pato</Text>
        </View>
        <View style={[styles.animal, styles.gato]}>
          <Image
            source={require("../assets/img/gato.png")}
            style={styles.img}
          />
          <Text style={styles.Textos}>Gato</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  macaco: {
    backgroundColor: "#00BF59",
  },
  cachorro: {
    backgroundColor: "#FF342F",
  },
  pato: {
    backgroundColor: "#FF8A26",
  },
  gato: {
    backgroundColor: "#FFC432",
  },
  img: {
    height: 150,
    width: 150,
  },
  Textos: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
