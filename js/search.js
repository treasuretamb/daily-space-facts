document.getElementById('searchBtn').addEventListener('click', function () {
  // Get the search query from the input field.
  const query = document.getElementById('searchInput').value.trim();
  
  // Return early if there is no input.
  if (!query) {
    document.getElementById('searchResults').innerHTML = "<p>Please enter a search term.</p>";
    return;
  }
  
  // Wikipedia opensearch API endpoint with parameters.
  const searchURL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=5&namespace=0&format=json&origin=*`;
  
  // fetch call to the API.
  fetch(searchURL)
    .then(response => response.json())
    .then(data => {
      // The returned data is an array with the following structure:
      // [search term, [titles], [descriptions], [links]]
      const [ , titles, descriptions, links ] = data;
      const resultsDiv = document.getElementById('searchResults');
      
      if (titles.length > 0) {
        // HTML string for all returned results.
        const html = titles.map((title, index) => `
          <div class="result-item">
            <h3>${title}</h3>
            <p>${descriptions[index]}</p>
            <a href="${links[index]}" target="_blank">Read more</a>
          </div>
        `).join("");
        resultsDiv.innerHTML = html;
      } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching search results:", error);
      document.getElementById('searchResults').innerHTML = "<p>Error fetching results. Please try again later.</p>";
    });
});
