import { useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { searchVideos } from '../services/api/youtubeApi';

export const useVideoSearch = () => {
    const { dispatch } = useApp();

    const search = useCallback(async (query) => {
        if (!query.trim()) return;

        dispatch({ type: 'SET_LOADING', payload: true });

        try {
            const data = await searchVideos(query);
            dispatch({ type: 'SET_VIDEOS', payload: data.topSuggestions || [] });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    }, [dispatch]);

    const clearResults = useCallback(() => {
        dispatch({ type: 'CLEAR_RESULTS' });
    }, [dispatch]);

    return { search, clearResults };
};