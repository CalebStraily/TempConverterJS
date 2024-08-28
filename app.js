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
    let convertedValue = 0;

    let userInputs = document.querySelectorAll("#inputRows input");
    let conversionsFrom = document.querySelectorAll("#temperatureInputType");
    let conversionsTo = document.querySelectorAll("#temperaturesConversionType");

    let tempInputs = [];
    let convertFromList = [];
    let convertToList = [];
    
    for (let i = 0; i < userInputs.length; i++)
    {
        tempInputs.push(Number(userInputs[i].value));
    }
    
    for (let i = 0; i < conversionsFrom.length; i++)
    {
        convertFromList.push(conversionsFrom[i].value);
    }

    for (let i = 0; i < conversionsTo.length; i++)
    {
        convertToList.push(conversionsTo[i].value);
    }

    //resets the result text to only contain "Result:"
    resultText.innerHTML = "";

    for (let i = 0; i < inputRows.children.length; i++)
    {
        if (isNaN(tempInputs[i]))
        {
            confirm(`Can't submit an non number value of ${tempInputs[i]}.`);
        }
        else
        {
            switch(convertToList[i])
            {
                case "Fahrenheit":
                    switch(convertFromList[i])
                    {
                        //Celsius to Fahrenheit Conversion
                        case "Celsius":
                            convertedValue = (tempInputs[i] * (9/5)) + 32;
                            resultText.innerHTML += `Result: ${convertedValue.toFixed(2)}°F <br />`;
                            break;
                        //Kelvin to Fahrenheit Conversion
                        case "Kelvin":
                            convertedValue = (tempInputs[i] - 273.15) * (9/5) + 32;
                            resultText.innerHTML += `Result: ${convertedValue.toFixed(2)}°F <br />`;
                            break;
                    }
                    break;
                case "Celsius":
                    switch(convertFromList[i])
                    {
                        //Fahrenheit to Celsius Conversion
                        case "Fahrenheit":
                            convertedValue = (tempInputs[i] - 32) * (5/9);
                            resultText.innerHTML += `Result: ${convertedValue.toFixed(4)}°C <br />`;
                            break;
                        //Kelvin to Celsius Conversion
                        case "Kelvin":
                            convertedValue = tempInputs[i] - 273.15;
                            resultText.innerHTML += `Result: ${convertedValue.toFixed(2)}°C <br />`;
                            break;
                    }
                    break;
                case "Kelvin":
                    switch(convertFromList[i])
                    {
                        //Celsius to Kelvin Conversion
                        case "Celsius":
                            convertedValue = tempInputs[i] + 273.15;
                            resultText.innerHTML += `Result: ${convertedValue}K <br />`;
                            break;
                        //Fahrenheit to Kelvin Conversion
                        case "Fahrenheit":
                            convertedValue = (tempInputs[i] - 32) * 5/9 + 273.15;
                            resultText.innerHTML += `Result: ${convertedValue.toFixed(3)}K <br />`;
                            break;
                    }
                    break;
            }
        }
    }
})

resetButton.addEventListener("click", () =>
{
    userTemperature.value = "";
    resultText.innerHTML = "";

    inputRows.innerHTML =  `<br />
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
})