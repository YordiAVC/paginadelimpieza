const flagsElement = document.getElementById("flags");
const textToChangeElements = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    try {
        const requestJson = await fetch(`./json/${language}.json`);
        if (!requestJson.ok) {
            throw new Error('Failed to fetch JSON');
        }
        const texts = await requestJson.json();
        textToChangeElements.forEach((textToChange) => {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            textToChange.innerHTML = texts[section][value];
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});
