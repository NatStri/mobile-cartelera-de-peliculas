import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

// Subcomponente de Calificación
const Rating = ({ score }) => {
    // La API de TVMaze usa una propiedad 'rating' que a veces es null,
    // o puedes usar el 'score' de búsqueda o el promedio de rating del show.
    // Usaremos un simple ejemplo para mostrar la calificación.
    const displayScore = score ? score.toFixed(1) : 'N/A';
    
    return (
        <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>⭐️ {displayScore}</Text>
        </View>
    );
};

const ShowCard = ({ show }) => {
    // Extraemos la información necesaria de la estructura del objeto 'show'
    const name = show.name;
    // La URL de la imagen (a veces es 'null', por eso usamos el operador de encadenamiento opcional `?`)
    const imageUrl = show.image?.medium || 'https://via.placeholder.com/210x295.png?text=No+Image';
    // Usamos el 'average' si está disponible, si no, es null
    const rating = show.rating?.average;
    // El enlace de información de la serie
    const officialSite = show.url;

    const openLink = () => {
        if (officialSite) {
            Linking.openURL(officialSite);
        } else {
            alert('No hay enlace de información disponible.');
        }
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                
                {/* 1. Componente de Calificación */}
                <Rating score={rating} /> 
                
                {/* 2. Enlace de Redirección */}
                <TouchableOpacity 
                    onPress={openLink} 
                    style={styles.linkButton}
                >
                    <Text style={styles.linkText}>Ver Información Oficial</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
    },
    image: {
        width: 100, // Tamaño fijo para la imagen de cartelera
        height: 150,
        resizeMode: 'cover',
    },
    infoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    ratingContainer: {
        backgroundColor: '#f9a825',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        marginVertical: 5,
    },
    ratingText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    linkButton: {
        backgroundColor: '#4CAF50',
        padding: 8,
        borderRadius: 5,
        marginTop: 5,
    },
    linkText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default ShowCard;