weather1 = [
    {high: 93, low: 84},
    {high: 97, low: 89},
    {high: 102, low: 91},
    {high: 99, low: 81},
    {high: 86, low: 72}
]
const fiveDayForecast = (weather) => {
    const forecastData = {
        average: {
            high: 0, 
            low: 0
        }, 
        variations: []
    };
    weather.forEach((day, index) => {
        forecastData.average.high += day.high;
        // Add the sum assignment for low
        forecastData.average.low += day.low;
        //If it's the first day, assign {high: 0,low: 0} to variations
        if (index === 0) {
            forecastData.variations.push({
                 high: 0,
                 low: 0
            });
        } else {
            forecastData.variations.push({
                high: weather[index - 1].high - day.high,
                low: weather[index - 1].low - day.low
           });
        }
    });
    forecastData.average.high /= weather.length;
    forecastData.average.low /= weather.length;
    return forecastData;
}
console.log(fiveDayForecast(weather1));