const nasaAPIKey = "UL2JpP9RY2ia4h6rlUMEbWt1kevcuzZjhbJgVyjW";
const apodURL = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}`;

function fetchAPOD() {
  fetch(apodURL)
    .then(response => response.json())
    .then(data => {
      // Update the image and explanation on the page.
      document.getElementById('apodImage').src = data.url;
      document.getElementById('apodExplanation').textContent = data.explanation;
    })
    .catch(error => {
      console.error("Error fetching APOD:", error);
      document.getElementById('apodExplanation').textContent = "Error loading image.";
    });
}

function loadRandomFact() {
  // an array of sample space facts.
    const facts = [
      "Jupiter is the largest planet in our solar system.",
      "A day on Venus is longer than a year on Venus.",
      "Neutron stars can spin at a rate of 600 rotations per second.",
      "The footprints on the Moon will remain there for millions of years.",
      "Saturn isn’t the only planet with rings. Jupiter, Uranus, and Neptune also have ring systems.",
      "Mercury and Venus are the only two planets in our solar system that do not have any moons.",
      "There are more stars in the universe than grains of sand on all the beaches on Earth.",
      "The Sun accounts for about 99.86% of the total mass of the solar system.",
      "Pluto is still considered a dwarf planet by the International Astronomical Union.",
      "The hottest planet in our solar system is Venus, even though Mercury is closer to the Sun.",
      "Uranus rotates on its side, making its seasonal changes extreme.",
      "Our Milky Way galaxy is estimated to contain 100–400 billion stars.",
      "Stars are born in huge clouds of dust and gas called nebulae.",
      "A light-year is the distance light travels in one year, roughly 5.88 trillion miles.",
      "The Milky Way and Andromeda galaxies are on a collision course and will merge in about 4.5 billion years.",
      "The footprints left on the Moon by Apollo astronauts are likely to remain for at least 100 million years.",
      "Space is completely silent because there is no atmosphere to carry sound.",
      "One of the coldest places in the known universe is the Boomerang Nebula, at about -272 °C (1 K).",
      "The average surface temperature of the Moon is 107 °C (225 °F) during the day and -153 °C (-243 °F) at night.",
      "Mars has the largest volcano in the solar system, Olympus Mons, which is nearly three times the height of Mount Everest.",
      "The vacuum of space allows for extreme temperature variations between sunlight and shadow.",
      "Astronauts in space can experience up to a 2% loss in bone density per month.",
      "A full NASA space suit costs roughly $12 million, with 70% of that cost due to the backpack and control module.",
      "It takes 8 minutes and 20 seconds for light from the Sun to reach Earth.",
      "The International Space Station (ISS) travels around Earth at 28,000 kilometers per hour (17,500 mph).",
      "If two pieces of metal touch in space, they can bond together permanently—a phenomenon called cold welding.",
      "The footprints on the Moon will probably stay there for about 100 million years due to the lack of atmosphere.",
      "A single day on Mercury is equivalent to 176 Earth days.",
      "The largest known star, UY Scuti, is about 1,700 times larger than the Sun.",
      "Venus rotates in the opposite direction to most planets in our solar system.",
      "There are over 200 moons orbiting planets in our solar system.",
      "Earth is the only planet not named after a god.",
      "Comets are often called “dirty snowballs” because they are made of ice, dust, and small rocky particles.",
      "Black holes are regions in space where the gravitational pull is so strong that nothing, not even light, can escape.",
      "The observable universe is approximately 93 billion light-years in diameter.",
      "Quasars are extremely bright and distant objects powered by black holes.",
      "The cosmic microwave background radiation is the afterglow of the Big Bang and fills the entire universe.",
      "The Hubble Space Telescope has provided some of the most detailed images of distant galaxies and nebulae.",
      "Pulsars are highly magnetized, rotating neutron stars that emit beams of electromagnetic radiation.",
      "Interstellar space is not completely empty; it is filled with cosmic rays, dust, gas, and magnetic fields.",
      "The term 'Big Bang' describes the moment when our universe began expanding from a singularity.",
      "Galaxies can collide and merge, and such interactions can trigger bursts of star formation.",
      "Some asteroids have their own moons or small binary companions.",
      "The Voyager 1 spacecraft, launched in 1977, is the farthest man-made object from Earth.",
      "Light from distant galaxies can take billions of years to reach us, offering a view into the early universe.",
      "The Kuiper Belt is a region of the solar system beyond Neptune that is home to many dwarf planets.",
      "Some exoplanets orbit their stars so closely that a year on those planets is just a few days long.",
      "In space, without the dampening effect of air, even the tiniest particles can cause significant damage to spacecraft.",
      "The James Webb Space Telescope is designed to look further back into the history of the universe than ever before."
    ];
    
    // pick random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('dailyFact').textContent = randomFact;
  }
  

// Initialize the page.
document.getElementById('randomFactBtn').addEventListener('click', loadRandomFact);

document.addEventListener('DOMContentLoaded', function () {
  fetchAPOD();
  loadDailyFact();
});

document.getElementById('bookmarkBtn').addEventListener('click', function () {
  const fact = document.getElementById('dailyFact').textContent;
  addFavorite(fact);  // This function is defined in favorites.js
});


