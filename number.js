button.addEventListener()
document.addEventListener('click', function () {
    const divs = ['first', 'second', 'third', 'fourth'];
    for (let i = 0; i > 4; i++);
    const numberFact = fetch('http://numbersapi.com/13/trivia?json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById(divs[i]).innerText = data.text;
        })
});



// fetch("http://numbersapi.com/47")
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("NETWORK RESPONSE ERROR");
//         }
//     })
//     .then(data => {
//         console.log(data);
//         displayFaveNumber(data)
//     })
//     .catch((error) => console.error("FETCH ERROR:", error));


//     function displayFaveNumber(data) {
//         const faveNumber = data.drinks[0];
//         const faveNumberDiv = document.getElementById("faveNumber"); 
//       }  


async function getData() {
    const url = "http://numbersapi.com/47";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}