import { useEffect, useState } from "react"
import api from './api/api.js';

const usePeliculas = (showIds = []) => {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPeliculasByIds = async () => {
            if (showIds.length === 0) {
                setPeliculas([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
    
                const promises = showIds.map(id => api.get(`/shows/${id}`))
                const responses = await Promise.all(promises);
                const showsData = responses.map(response => response.data);
                
                setPeliculas(showsData);

            } catch (err) {
                console.error('Error fetching data by IDs: ', err);
                setError(err);
                setPeliculas([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchPeliculasByIds();
    }, [showIds]);

    return { peliculas, loading, error };
};

export default usePeliculas;