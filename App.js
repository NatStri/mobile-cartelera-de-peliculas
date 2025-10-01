import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import usePeliculas from '../hooks/usePeliculas.js';
import ShowCard from './components/ShowCard.js';

const MOVIE_IDS = [
    82,
    305,
    431,
    526,
    179,
]; 

const MoviesListScreen = () => {
    const { peliculas, loading, error } = usePeliculas(MOVIE_IDS); 

    const renderItem = ({ item }) => <ShowCard show={item} />;

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando series por ID...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.errorText}>Error al cargar los datos: {error.message}</Text>
                <Text>Inténtalo de nuevo más tarde.</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Películas/Series por ID</Text>
            {peliculas.length > 0 ? (
                <FlatList
                    data={peliculas}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()} 
                    contentContainerStyle={styles.listContent}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text>No se encontraron películas para los IDs especificados.</Text>
                </View>
            )}
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
        paddingBottom: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});

export default MoviesListScreen;