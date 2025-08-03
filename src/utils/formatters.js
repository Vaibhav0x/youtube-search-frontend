export const formatNumber = (num) => {
    if (!num) return '0';
    const number = parseInt(num);
    if (number >= 1000000) return (number / 1000000).toFixed(1) + 'M';
    if (number >= 1000) return (number / 1000).toFixed(1) + 'K';
    return number.toString();
};

export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};

export const formatDuration = (duration) => {
    if (!duration) return '';

    const parts = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parts[1] ? parseInt(parts[1]) : 0;
    const minutes = parts[2] ? parseInt(parts[2]) : 0;
    const seconds = parts[3] ? parseInt(parts[3]) : 0;

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};