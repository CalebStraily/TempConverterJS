let userTemperature = document.getElementById("temperatureInput");
let userTempType = document.getElementById("temperatureInputType");
let conversionType = document.getElementById("temperaturesConversionType");
let submitButton = document.getElementById("submit");
let resultText = document.getElementById("resultArea");
let resetButton = document.getElementById("reset");
let addButton = document.getElementById("addRow");
let removeButton = document.getElementById("removeRow");
let inputRows = document.getElementById("inputRows");
let row = document.getElementsByClassName("new-row")

let rowCount = 1;

addButton.addEventListener("click", () =>
{
    rowCount++;

    let newRow = document.createElement("div");
    newRow.className = 'col-12 text-center new-row';
    newRow.id = 'row-' + rowCount;

    newRow.innerHTML = `<br />
                        <input type="text" name="temperatureInput" id="temperatureInput" placeholder="Temperature to Convert">
                        <select name="temperatureInputType" id="temperatureInputType">
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Celsius">Celsius</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                        <label for="temperaturesConversionType">convert to:</label>
                        <select name="temperaturesConversionType" id="temperaturesConversionType">
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Celsius">Celsius</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>`;

    inputRows.appendChild(newRow);

    console.log(inputRows);
})

removeButton.addEventListener("click", () =>
{
    let lastChild = inputRows.lastElementChild;
    let rowCheck = document.getElementById("row-1");

    if (lastChild != rowCheck)
    {
        inputRows.removeChild(lastChild);
        rowCount--;
    }
})

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

resetButton.addEventListener("click", () =>
{
    userTemperature.value = "";
    resultText.innerHTML = "";
})