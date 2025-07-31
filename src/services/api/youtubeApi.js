import { apiClient } from './apiClient';

export const searchVideos = async (query) => {
    try {
        const response = await apiClient.get(`/search/?query=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        throw new Error(
            'Oops! Something went wrong while fetching video suggestions. Please try again in a moment.'
        );
    }
};