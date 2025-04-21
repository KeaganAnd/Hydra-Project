fetch('articles/articles.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to load JSON file');
    }
    return response.json(); // Parse the JSON and return the promise
  })
  .then((articles) => {
    
    const params = new URLSearchParams(window.location.search);
    let articleInUrl = params.get('section') || 'intro'; // Default to 'intro'

    // Iterate through the articles array
    articleInUrl = articleInUrl + ".md"

    articles.forEach((article, index) => {

    if (article.src === articleInUrl) {
        
        let nextButton = document.getElementById('nextButton');
        let backButton = document.getElementById('backButton');


        nextButton.style.display = 'sticky'
        backButton.style.display = 'sticky'
        // Set the previous article
        
        if (index - 1 >= 0) {
            backButton.textContent = "< " + articles[index - 1].name;
            backButton.onclick = () => {
              location.href = `?section=${articles[index - 1].src.replace('.md', '')}`;
            };
            console.log("Updated Back")
          } else {
              backButton.style.display = 'none'
              console.log("No Next Article")
          }

        // Set the next article
        if (index + 1 < articles.length) {
          nextButton.textContent = articles[index + 1].name + " >";
          nextButton.onclick = () => {
            location.href = `?section=${articles[index + 1].src.replace('.md', '')}`;
          };
          console.log("Updated Next")
        } else {
            nextButton.style.display = 'none'
            console.log("No Next Article")
        }
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });