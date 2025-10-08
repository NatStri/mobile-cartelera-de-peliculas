import { Link } from "expo-router";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth"; 

const BUTTON_PROPS = {
    title: "REGISTRAR", 
    color: "#841584",
};

export default function RegisterScreen() {
    const { register, error } = useAuth();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async () => {
        console.log(`nombre: ${name}, usuario: ${username}, pass: ${password}`);
        register({ username, password, name });
        if (error) {
             Alert.alert("Error de Registro", error.message || "No se pudo completar el registro.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Register</Text>
            {error && <Text style={styles.errorText}>Error: {error.message || 'Verifica tus datos'}</Text>}
            
            <TextInput
                style={styles.input}
                placeholder="Username (Correo)"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                keyboardType="default"
            />
            <View style={styles.diseñoBoton}>
                <Button 
                    title={BUTTON_PROPS.title} 
                    color={BUTTON_PROPS.color} 
                    onPress={handleRegister}>
                </Button>
            </View>
            <Link href="/login" style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Link>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    diseñoBoton: {
        width: 300,
        marginTop: 12,
    },
    input: {
        height: 40,
        width: 300,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    link: {
        marginTop: 20,
        color: '#841584',
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    }
});