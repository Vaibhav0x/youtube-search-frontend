import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
    query: '',
    videos: [],
    loading: false,
    selectedLanguage: 'all',
};

const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_VIDEOS':
            return { ...state, videos: action.payload, loading: false, error: null };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        case 'SET_QUERY':
            return { ...state, query: action.payload };
        case 'CLEAR_RESULTS':
            return { ...state, videos: [], error: null };
        case 'SET_LANGUAGE':
            return {
                ...state,
                selectedLanguage: action.payload
            };
        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const value = {
        ...state,
        dispatch,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};