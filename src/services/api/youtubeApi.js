import { apiClient } from './apiClient';

export const searchVideos = async (query, videoLanguage = 'all') => {
    try {
        // Constructing URL with proper query parameters
        let url = `/search/?query=${encodeURIComponent(query)}`;

        const response = await apiClient.get(url);

        // Filter videos by language if a specific language is selected
        if (videoLanguage && videoLanguage !== 'all') {
            const filteredVideos = response.data.topSuggestions.filter(video => {
                const videoLang = (
                    video.snippet.defaultLanguage ||
                    video.snippet.defaultAudioLanguage ||
                    video.language ||
                    ''
                ).toLowerCase();

                // Handle variations of language codes
                switch (videoLanguage) {
                    case 'hi':
                        return videoLang.startsWith('hi') ||
                            videoLang.includes('hindi') ||
                            videoLang === 'en-in';
                    case 'en':
                        return videoLang.startsWith('en') ||
                            videoLang.includes('english');
                    default:
                        return videoLang.startsWith(videoLanguage);
                }
            });

            return {
                ...response.data,
                topSuggestions: filteredVideos
            };
        }

        return response.data;
    } catch (error) {
        console.error('Search Error:', error);
        throw new Error(
            'Oops! Something went wrong while fetching video suggestions. Please try again in a moment.'
        );
    }
};