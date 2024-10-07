document.getElementById('drawOneCard').addEventListener('click', function () {
    //1. First, get a new shuffled deck
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(deckData => {
            const deckId = deckData.deck_id;

            // Now, draw one card from the newly shuffled deck
            return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        })
        .then(response => response.json())
        .then(cardData => {
            const card = cardData.cards[0];
            const value = card.value;
            const suit = card.suit;

            // Log the card value and suit, e.g., "5 of spades"
            console.log(`You drew ${value} of ${suit.toLowerCase()}`);
        })
        .catch(error => {
            console.error('Error drawing the card:', error);
        });
});

document.getElementById('drawTwoCards').addEventListener('click', function () {
    let deckId;

    //2. Get a new shuffled deck
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(deckData => {
            deckId = deckData.deck_id;

            // Draw the first card
            return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        })
        .then(response => response.json())
        .then(firstCardData => {
            const firstCard = firstCardData.cards[0];
            const firstCardValue = firstCard.value;
            const firstCardSuit = firstCard.suit.toLowerCase();

            // Draw the second card from the same deck
            return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
                .then(response => response.json())
                .then(secondCardData => {
                    const secondCard = secondCardData.cards[0];
                    const secondCardValue = secondCard.value;
                    const secondCardSuit = secondCard.suit.toLowerCase();

                    // Log both cards
                    console.log(`First card: ${firstCardValue} of ${firstCardSuit}`);
                    console.log(`Second card: ${secondCardValue} of ${secondCardSuit}`);
                });
        })
        .catch(error => {
            console.error('Error drawing cards:', error);
        });
});



//3. On page load, fetch a new shuffled deck
let deckId;

window.onload = function () {

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(deckData => {
            deckId = deckData.deck_id;
        })
        .catch(error => {
            console.error('Error fetching deck:', error);
        });
}

// Step 2: Event listener for the "Draw a Card" button
document.getElementById('drawCard').addEventListener('click', function () {
    if (!deckId) {
        return; // Ensure deck is loaded before drawing cards
    }

    // Step 3: Draw a card from the deck
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => response.json())
        .then(cardData => {
            if (cardData.remaining === 0) {
                document.getElementById('drawCard').disabled = true; // Disable button if no cards left
                document.getElementById('noCards').innerText = 'No cards left in the deck!';
            }

            const card = cardData.cards[0];
            const cardImg = card.image;

            // Step 4: Display the card image on the page
            const cardContainer = document.getElementById('cardContainer');
            const imgElement = document.createElement('img');
            imgElement.src = cardImg;
            cardContainer.appendChild(imgElement);
        })
        .catch(error => {
            console.error('Error drawing card:', error);
        });
});