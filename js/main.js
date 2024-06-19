//fetch the definition from the API
async function getDefinition(word, apiKey) {
    const data = await fetch(`https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=${apiKey}`);
    const result = await data.json();
    //check if definition is there
    if (result.length === 0 || !result[0].shortdef || result[0].shortdef.length === 0) {
        document.getElementById('definition-container').innerHTML = "No definition found.";
        return;
    }

    //display the first definition
    const firstDefinition = result[0].shortdef[0];

    //show the definition on the page
    const containerResult = document.getElementById('definition-container');
    containerResult.innerHTML = `<p class="definition">Definition of <strong>${word}</strong>: <em>${firstDefinition}</em></p>`;
}

    //event listener added to the search button
document.getElementById('searchButton').addEventListener('click', () => {
    const word = document.getElementById('searchWord').value;
    getDefinition(word, "ae4087ab-8b97-43c4-a008-591ab078b8c1");
});
