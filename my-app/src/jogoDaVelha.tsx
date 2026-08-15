import { StyleSheet, Text, View } from "react-native";

export default function JogoDaVelha() {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Jogo da Velha</Text>

      <View style={style.areaDeJogo}>
        <View style={style.conjunto}>
          <View style={style.celula}>
            <Text style={style.valorJogado}>X</Text>
          </View>

          <View style={style.celula}>
            <Text style={style.valorJogado}>O</Text>
          </View>

          <View style={style.celula}>
            <Text style={style.valorJogado}>X</Text>
          </View>
        </View>

        <View style={style.conjunto}>
          <View style={style.celula}>
            <Text style={style.valorJogado}>O</Text>
          </View>

          <View style={style.celula}>
            <Text style={style.valorJogado}>X</Text>
          </View>

          <View style={style.celula}>
            <Text style={style.valorJogado}>O</Text>
          </View>
        </View>

        <View style={style.conjunto}>
          <View style={style.celula}>
            <Text style={style.valorJogado}>X</Text>
          </View>

          <View style={style.celula}>
            <Text style={style.valorJogado}>O</Text>
          </View>

          <View style={style.celula}>
            <Text style={style.valorJogado}>X</Text>
          </View>
        </View>
      </View>

      <View style={style.jogadorVez}>
        <Text style={style.textoJogador}>Vez do jogador: X</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 35,
    color: "#222",
  },

  areaDeJogo: {
    flexDirection: "row",
    borderWidth: 3,
    borderColor: "#222",
  },

  conjunto: {},

  celula: {
    width: 110,
    height: 110,
    backgroundColor: "#ee4b2b",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#222",
  },

  valorJogado: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#fff",
  },

  jogadorVez: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderWidth: 2,
    borderColor: "#222",
    width: 250,
    borderRadius: 20,
    backgroundColor: "#57a0d3",
  },

  textoJogador: {
    fontSize: 22,
    fontWeight: "600",
    color: "#222",
  },
});
