export const convertWindDirection = value => {
    switch(true) {
        case value > 348.75 || value < 11.25:
            return 'N';
        case value < 33.75:
            return 'NNE';
        case value < 56.25:
            return 'NE';
        case value < 78.75:
            return 'ENE';
        case value < 101.25:
            return 'E';
        case value < 123.75:
            return 'ESE';
        case value < 146.25:
            return 'SE';
        case value < 168.75:
            return 'SSE';
        case value < 191.25:
            return 'S';
        case value < 213.75:
            return 'SSW';
        case value < 236.25:
            return 'SW';
        case value < 258.75:
            return 'WSW';
        case value < 281.25:
            return 'W';
        case value < 303.75:
            return 'WNW';
        case value < 326.25:
            return 'NW';
        case value < 348.75:
            return 'NW';
        default:
            return 'No data';
    }
}