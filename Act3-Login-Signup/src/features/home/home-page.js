
var homePage = () => {
    /**
     * Start calculating the current payroll
     * upon loading the page
     */
    appStore.dispatch(actions.calculatePayroll());

    const { user, consecutiveLogins, payrollAmount } = appStore.getState();

    /**
     * Formats the current payroll amount into proper currency
     * @returns {string}
     */
    const formatPayrollAmount = () => {
        return new Intl.NumberFormat('en-PH', {
            currency: 'PHP',
            style: 'currency',
        }).format(payrollAmount);
    };

    const content = `
<div class="bg-white p-4 shadow-md rounded-lg flex flex-col space-y-4 ">
    <h1 class="text-2xl font-bold">Home</h1>
    <p>Welcome <span class="font-bold">${user.username}</span>!</p>

    <span id="consecutive-login-label">
        Consecutive Logins: ${consecutiveLogins}
    </span>
    <span>
        Current Payroll Amount: ${formatPayrollAmount()}
    </span>

    <button id="logout-btn" class="rounded bg-purple-500 px-4 py-2 text-white">
        <span>
            Logout
        </span>
    </button>
</div>
`;
    app.empty();
    app.append(content);
    app.hide().fadeIn();

    $('#logout-btn').on('click', () => {
        appStore.dispatch(actions.logout());
        navigateTo('login');
    });
};
/**
 * We need to call this function to render the page
 */
homePage();