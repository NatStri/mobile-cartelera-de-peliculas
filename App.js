import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import api from './api'; 
// Asegúrate de que la ruta sea correcta
import ShowCard from './components/ShowCard.js'; 

const MoviesListScreen = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchTerm = 'batman'; 

    useEffect(() => {
        fetchShows();
    }, []);

    const fetchShows = async () => {
        try {
            const response = await api.get(`/search/shows?q=${searchTerm}`);
            // Mapeamos para obtener solo el objeto 'show' que necesitamos para el componente ShowCard
            const showsData = response.data.map(item => item.show); 
            setShows(showsData);
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setLoading(false);
        }
    };

    // Usamos el nuevo componente ShowCard para renderizar cada elemento
    const renderItem = ({ item }) => <ShowCard show={item} />;

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando series...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Resultados de búsqueda para "{searchTerm}"</Text>
            <FlatList
                data={shows}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} 
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
    listContent: {
        paddingBottom: 20, // Espacio al final de la lista
    },
});

export default MoviesListScreen;