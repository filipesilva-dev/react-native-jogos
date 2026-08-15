import { Text, View, StyleSheet } from "react-native";

export default function JogoDaVelha() {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Jogo da Velha</Text>
      <View style={style.container}>
        <View style={style.areaDeJogo}>
          <View style={style.conjunto}>
            <View style={style.celula}>
              <Text style={style.valorjogado}>X</Text>
            </View>
            <View style={style.celula}>
              <Text style={style.valorjogado}>O</Text>
            </View>
            <View style={style.celula}>
              <Text style={style.valorjogado}>X</Text>
            </View>
          </View>
          <View style={style.conjunto}>
            <View style={style.celula}>
              <Text style={style.valorjogado}>O</Text>
            </View>
            <View style={style.celula}>
              <Text style={style.valorjogado}>X</Text>
            </View>
            <View style={style.celula}>
              <Text style={style.valorjogado}>X</Text>
            </View>
          </View>
          <View style={style.conjunto}>
            <View style={style.celula}>
              <Text style={style.valorjogado}>O</Text>
            </View>
            <View style={style.celula}>
              <Text style={style.valorjogado}>X</Text>
            </View>
            <View style={style.celula}>
              <Text style={style.valorjogado}>O</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.jogadorVez}>Vez do player: X</View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    fontSize: 42,
    margin: 10,
  },
  areaDeJogo: { flexDirection: "row" },
  conjunto: {},
  celula: {
    backgroundColor: "#ee4b2b",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 100,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  valorjogado: {
    fontSize: 24,
  },
  jogadorVez: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 20,
    fontSize: 22,
    borderWidth: 2,
    width: 250,
    borderRadius: 20,
  },
});
