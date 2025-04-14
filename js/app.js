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

function loadDailyFact() {
  // hard-coded space fact for demo
  const fact = "Did you know? The largest volcano in the solar system is on Mars!";
  document.getElementById('dailyFact').textContent = fact;
}

// Initialize the page.
document.addEventListener('DOMContentLoaded', function () {
  fetchAPOD();
  loadDailyFact();
});
