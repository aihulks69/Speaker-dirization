let appTheme = localStorage.getItem('theme');

export function initTheme() {
    // Check what is the active theme
    if (
        appTheme === 'dark' &&
        document.querySelector('body').classList.contains('app-theme')
    ) {
        document.querySelector('body').classList.add('bg-primary-dark');
    } else {
        document.querySelector('body').classList.add('bg-secondary-light');
    }
}

export function toggleTheme() {
    if (appTheme === 'dark') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
    return appTheme;
}

// Light Theme Function
function setLightTheme() {
    appTheme = 'light'
    localStorage.setItem('theme', appTheme);
}

// Dark Theme Function
function setDarkTheme() {
    appTheme = 'dark'
    localStorage.setItem('theme', appTheme);
}
