

const initialState = {
    connection:true,
    f_connectio:false
};

export function authReducer(state = initialState, action) {

    switch (action.type){
        case "CONNECYION_FAIL":
            return {
                ...state,
                connection:false
            };
        case "CONNECYION_SUCCESS":
            return {
                    ...state,
                    connection:true
            };
            case "F_CONNECYION":
                return {
                    ...state,
                    f_connectio:!state.f_connectio
                };

                default:
                    return state;
    }
}
