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