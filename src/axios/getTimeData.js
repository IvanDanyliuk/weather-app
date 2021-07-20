export const getTimeData = time => {
    const timeToConvert = new Date(time);
    const hours = timeToConvert.getHours();
    const minutes = timeToConvert.getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};