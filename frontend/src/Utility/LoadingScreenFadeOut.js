//Loading screen fade-out, content fade-in

//Requires CSS modifications

const loadScreenFadeOut = () => {
    const loadingScreenElement = document.getElementById("loading-screen");
    loadingScreenElement.classList.add("fade-out");
    const contentElement = document.getElementById("content");
    contentElement.classList.add("visible")
}

export default loadScreenFadeOut;