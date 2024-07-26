console.log('loaded')

let currentTheme = getTheme();

changeTheme()
function changeTheme() {
    //set to web page
    document.querySelector('html').classList.add(currentTheme);
    //set listening to page theme button
    const changeButtonTheme = document.querySelector('#theme_change_button');
    //change the text
    changeButtonTheme.querySelector('span').textContent = currentTheme == "light" ? "Dark" : "Light"
    changeButtonTheme.addEventListener('click', (event) => {
        const oldTheme = currentTheme
        console.log('clicked');
        currentTheme === "dark" ? currentTheme = "light" : currentTheme = "dark";
        
    })
}

//set theme from local storage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}
//get theme from local storage
function getTheme() {
    let theme = localStorage.getItem("theme")
    return theme ? theme : "light";
}

//change page theme
function changePageTheme(){
    // update local storage
    setTheme(currentTheme)
    document.querySelector('html').classList.remove(oldTheme)
    document.querySelector('html').classList.add(currentTheme);
    //change the text
    changeButtonTheme.querySelector('span').textContent = currentTheme == "light" ? "Dark" : "Light"
}