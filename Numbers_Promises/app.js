document.getElementById('getFact').addEventListener('click', function () {
    fetch('http://numbersapi.com/7?json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').innerText = data.text;
        })
        .catch(error => {
            console.error('Error fetching the number fact:', error);
            document.getElementById('fact').innerText = 'An error occurred.';
        });
});


document.getElementById('getFacts').addEventListener('click', function () {
    // Request for facts about multiple numbers
    fetch('http://numbersapi.com/1,2,3,4?json')
        .then(response => response.json())
        .then(data => {
            // Clear the previous facts
            const factsDiv = document.getElementById('facts');
            factsDiv.innerHTML = '';

            // Loop through the returned data and display each fact
            for (const number in data) {
                const factParagraph = document.createElement('p');
                factParagraph.innerText = `Fact about ${number}: ${data[number]}`;
                factsDiv.appendChild(factParagraph);
            }
        })
        .catch(error => {
            console.error('Error fetching the number facts:', error);
            document.getElementById('facts').innerText = 'An error occurred.';
        });
});

document.getElementById('getThirteenFacts').addEventListener('click', function () {
    const number = 13; // favorite number
    const factPromises = [];

    // Create 4 promises to fetch facts about the same number
    for (let i = 0; i < 4; i++) {
        factPromises.push(fetch(`http://numbersapi.com/${number}?json`).then(response => response.json()));
    }

    // Once all the promises resolve, display the facts
    Promise.all(factPromises)
        .then(facts => {
            const factsDiv = document.getElementById('thirteenFacts');
            factsDiv.innerHTML = ''; // Clear any previous facts

            facts.forEach((fact, index) => {
                const factParagraph = document.createElement('p');
                factParagraph.innerText = `Fact ${index + 1}: ${fact.text}`;
                factsDiv.appendChild(factParagraph);
            });
        })
        .catch(error => {
            console.error('Error fetching the number facts:', error);
            document.getElementById('thirteenFacts').innerText = 'An error occurred.';
        });
});