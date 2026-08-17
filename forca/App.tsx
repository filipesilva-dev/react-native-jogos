import { Image, StyleSheet, Text, View } from "react-native";

export default function Forca() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Jogo da Forca</Text>
        <Text style={styles.tentativas}>Tentativas: 5</Text>
      </View>

      <View style={styles.areaJogo}>
        <Image
          source={require("./assets/img/forca.png")}
          style={styles.img}
          resizeMode="contain"
        />

        <Text style={styles.palavra}>_ _ _ _ _ _</Text>
      </View>

      <View style={styles.dica}>
        <Text style={styles.dicaTitulo}>Dica</Text>
        <Text style={styles.dicaTexto}>É um animal</Text>
      </View>
      <View style={styles.letras}>
        <Text style={styles.letra}>A</Text>
        <Text style={styles.letra}>B</Text>
        <Text style={styles.letra}>C</Text>
        <Text style={styles.letra}>D</Text>
        <Text style={styles.letra}>E</Text>
        <Text style={styles.letra}>F</Text>
        <Text style={styles.letra}>G</Text>
        <Text style={styles.letra}>H</Text>
        <Text style={styles.letra}>I</Text>
        <Text style={styles.letra}>J</Text>
        <Text style={styles.letra}>K</Text>
        <Text style={styles.letra}>L</Text>
        <Text style={styles.letra}>M</Text>
        <Text style={styles.letra}>N</Text>
        <Text style={styles.letra}>O</Text>
        <Text style={styles.letra}>P</Text>
        <Text style={styles.letra}>Q</Text>
        <Text style={styles.letra}>R</Text>
        <Text style={styles.letra}>S</Text>
        <Text style={styles.letra}>T</Text>
        <Text style={styles.letra}>U</Text>
        <Text style={styles.letra}>V</Text>
        <Text style={styles.letra}>W</Text>
        <Text style={styles.letra}>X</Text>
        <Text style={styles.letra}>Y</Text>
        <Text style={styles.letra}>Z</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1f2937",
  },

  tentativas: {
    fontSize: 18,
    color: "#6b7280",
    marginTop: 5,
  },

  areaJogo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 260,
    height: 200,
  },

  palavra: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 8,
    color: "#111827",
  },

  dica: {
    alignItems: "center",
    marginBottom: 20,
  },

  dicaTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6b7280",
  },

  dicaTexto: {
    fontSize: 20,
    color: "#111827",
    marginTop: 4,
  },

  letras: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 100,
  },

  letra: {
    width: 32,
    height: 32,
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 8,
  },
});
