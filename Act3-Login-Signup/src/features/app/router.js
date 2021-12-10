
/** 
 * Handles the app's internal navigation
 * @param {string} route 
 */
const navigateTo = (route) => {

    /**
     * Loads a specific page using the jQuery's getScript function.
     * @param {string} path 
     */
    const loadPage = (path) => {
        $.getScript(path, {});
    };

    switch (route) {
        case 'login':
            loadPage('features/login/login-page.js');
            break;
        case 'home':
            loadPage('features/home/home-page.js');
            break;
        default:
            loadPage('features/login/login-page.js');
            break;
    }

};