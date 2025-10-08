import { FlatList, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function HomeScreen() {
    const user = {
        username: "usuario_ejemplo123",
        name: "Nat Stri"
    };

    return (
        <View style={styles.fullContainer}> 
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.titulo}>Perfil de Usuario</Text>
                
                <View style={styles.profileCard}>
                    <Text style={styles.label}>Username:</Text>
                    <Text style={styles.value}>{user.username}</Text>
                    
                    <Text style={styles.label}>Nombre Completo:</Text>
                    <Text style={styles.value}>{user.name}</Text>
                </View>

                <Link href="/login" style={styles.link}>
                    LOGIN
                </Link>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    safeArea: {
        flex: 1, 
        alignItems: "center",
        paddingTop: 50,
        backgroundColor: "#f5f5f5",
    },
    titulo: {
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
        color: "#333",
    },
    profileCard: {
        width: '85%',
        padding: 25,
        backgroundColor: "#ffafafff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 14,
        color: "#555",
        marginTop: 15,
    },
    value: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 5,
    },
    link: {
        marginTop: 40,
        color: '#ba55c0',
        textDecorationLine: 'underline',
        fontSize: 16,
    }
});