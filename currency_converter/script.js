document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '080d14e1a22e56e1b0fcbe7e'; // Replace with your ExchangeRate-API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('currency-form');

    // Fetch currency data and populate the select options
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);
            currencies.forEach(currency => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currency;
                optionFrom.textContent = currency;
                fromCurrencySelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currency;
                optionTo.textContent = currency;
                toCurrencySelect.appendChild(optionTo);
            });
        })
        .catch(error => {
            console.error('Error fetching currencies:', error);
        });

    // Handle form submission
    form.addEventListener('submit', event => {
        event.preventDefault();
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Please enter a valid amount.';
            return;
        }

        const conversionUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
        
        fetch(conversionUrl)
            .then(response => response.json())
            .then(data => {
                const convertedAmount = data.conversion_result;
                resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            })
            .catch(error => {
                resultDiv.textContent = 'Error fetching conversion rate.';
                console.error('Error:', error);
            });
    });
});
