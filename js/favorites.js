// Function to add a favorite fact.
function addFavorite(fact) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(fact);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayFavorites();
}

// Function to display favorites.
function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoritesList = document.getElementById('favoritesList');
  if (favorites.length === 0) {
    favoritesList.innerHTML = "<p>No favorites saved yet!</p>";
    return;
  }
  favoritesList.innerHTML = favorites.map((fact, index) => `<p>${fact} <button onclick="removeFavorite(${index})">Remove</button></p>`).join("");
}

// Function to remove a favorite.
function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayFavorites();
}

// Initialize favorites on page load.
document.addEventListener('DOMContentLoaded', displayFavorites);
