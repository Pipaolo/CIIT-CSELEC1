
const DEFAULT_PAYROLL_RATE = 100;

/**
 * This holds the global state of the application
 */

const initialState = {
    user: null,
    consecutiveLogins: 0,
    payrollAmount: 0,
};

const actions = {
    login: (username, password) => {
        return {
            type: 'LOGIN',
            payload: {
                username,
                password,
            },
        };
    },
    calculatePayroll: () => ({
        type: 'CALCULATE_PAYROLL',
    }),
    logout: () => {
        return {
            type: 'LOGOUT',
        };
    }
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                consecutiveLogins: state.consecutiveLogins + 1,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        case 'CALCULATE_PAYROLL':
            const totalPayroll = (state.consecutiveLogins * DEFAULT_PAYROLL_RATE);
            return {
                ...state,
                payrollAmount: totalPayroll,
            };
        default:
            return state;

    }

};

const appStore = createStore(appReducer);