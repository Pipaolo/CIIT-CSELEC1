


var loginPage = () => {
    const content = `
    <div class="bg-white p-4 shadow-md rounded-lg flex flex-col space-y-4">
        <h1 class="text-2xl font-bold">Login</h1>
        <form id="login-form" class="flex flex-col space-y-4">
            <div class="flex flex-col">
                <label for="username-input" class="">Username</label>
                <input required name="username" class="focus:outline-none border-gray-200 border rounded p-2 focus:border-purple-500  duration-300 transition" type="text" id="username-input" placeholder="Enter username"/>
            </div>
            <div class="flex flex-col">
                <label for="password-input">Password</label>
                <input required name="password" class="focus:outline-none border-gray-200 border rounded p-2 focus:border-purple-500  duration-300 transition" type="password" id="password-input" placeholder="Enter password"/>
            </div>
            <button class="rounded bg-purple-500 px-4 py-2 text-white">
                <span>
                    Login
                </span>
            </button>
        </form>
    </div>`;

    app.empty();
    app.append(content);
    app.hide().fadeIn();

    /**
     * After rendering the page, we need to attach the event listeners to the
     * form
     */
    const loginForm = $('#login-form');

    loginForm.on('submit', (e) => {
        e.preventDefault();

        const username = $('#username-input').val();
        const password = $('#password-input').val();
        appStore.dispatch(actions.login(username, password));
        navigateTo('home');
    });
};

/**
 * We need to call this function to render the page
 */
loginPage();




