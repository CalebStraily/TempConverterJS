let userTemperature = document.getElementById("temperatureInput");
let userTempType = document.getElementById("temperatureInputType");
let conversionType = document.getElementById("temperaturesConversionType");
let submitButton = document.getElementById("submit");
let resultText = document.getElementById("resultArea");

submitButton.addEventListener("click", () =>
{
    let convertTo = conversionType.value;
    let convertFrom = userTempType.value;
    let userTemp = Number(userTemperature.value);
    let convertedValue = 0;

    if (isNaN(userTemp))
    {
        confirm("Can't submit an non number value.");
    }
    else
    {
        //resets the result text to only contain "Result:"
        resultText.innerHTML = "";
        
        switch(convertTo)
        {
            case "Fahrenheit":
                switch(convertFrom)
                {
                    //Celsius to Fahrenheit Conversion
                    case "Celsius":
                        convertedValue = (userTemp * (9/5)) + 32;
                        resultText.innerHTML += `Result: ${convertedValue.toFixed(2)}°F`;
                        break;
                    //Kelvin to Fahrenheit Conversion
                    case "Kelvin":
                        convertedValue = (userTemp - 273.15) * (9/5) + 32;
                        resultText.innerHTML += `Result: ${convertedValue.toFixed(2)}°F`;
                        break;
                }
                break;
            case "Celsius":
                switch(convertFrom)
                {
                    //Fahrenheit to Celsius Conversion
                    case "Fahrenheit":
                        convertedValue = (userTemp - 32) * (5/9);
                        resultText.innerHTML += `Result: ${convertedValue.toFixed(4)}°C`;
                        break;
                    //Kelvin to Celsius Conversion
                    case "Kelvin":
                        convertedValue = userTemp - 273.15;
                        resultText.innerHTML += `Result: ${convertedValue.toFixed(2)}°C`;
                        break;
                }
                break;
            case "Kelvin":
                switch(convertFrom)
                {
                    //Celsius to Kelvin Conversion
                    case "Celsius":
                        convertedValue = userTemp + 273.15;
                        resultText.innerHTML += `Result: ${convertedValue}K`;
                        break;
                    //Fahrenheit to Kelvin Conversion
                    case "Fahrenheit":
                        convertedValue = (userTemp - 32) * 5/9 + 273.15;
                        resultText.innerHTML += `Result: ${convertedValue.toFixed(3)}K`;
                        break;
                }
                break;
        }
    }
})