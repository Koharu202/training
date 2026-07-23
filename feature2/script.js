const randomFacts = [
    "A group of flamingos is called a 'flamboyance'",
    "Octopuses have three hearts",
    "Honey never spoils",
    "A day on Venus is longer than a year on Venus",
    "Bananas are berries, but strawberries aren't",
    "The Eiffel Tower can grow 6 inches in summer",
    "A jiffy is an actual unit of time: 1/100th of a second",
    "Hot water freezes faster than cold water (Mpemba effect)"
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    return randomFacts[randomIndex];
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("Random Fact:", getRandomFact());
    document.title = "Feature 2 - " + getRandomFact();
});
