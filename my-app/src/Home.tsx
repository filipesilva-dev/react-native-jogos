import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();

  const menuItems = [
    { name: "Forca", icon: "game-controller", color: "#FF6B6B" },
    { name: "JogoDaVelha", icon: "grid", color: "#4ECDC4" },
    { name: "Quadrados", icon: "square", color: "#FFE66D" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#7FFFD4" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>🎮 Meus Jogos</Text>
          <Text style={styles.subtitle}>Escolha um jogo para começar</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => navigation.navigate(item.name)}
              activeOpacity={0.8}
            >
              <Ionicons name={item.icon} size={48} color="#fff" />
              <Text style={styles.cardText}>
                {item.name === "JogoDaVelha" ? "Jogo da Velha" : item.name}
              </Text>
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>▶</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Divirta-se!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#7FFFD4",
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#718096",
  },
  menuContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  cardText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 20,
    flex: 1,
  },
  cardBadge: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 30,
    padding: 8,
    paddingHorizontal: 14,
  },
  badgeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#A0AEC0",
    fontSize: 14,
  },
});
