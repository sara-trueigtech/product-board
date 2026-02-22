export const initialState = {
    token: null,
    isAuth: false,
    user: null,
};

export const reducer = (state, action) => {
    switch(action.type){
        case "SIGNUP":{
            const {user} = action.payload;

            const token = "logged-in";
            localStorage.setItem("access-token", token);
            document.cookie = `access-token=${token}; path=/`;

            return{
                ...state,
                user,
                token,
                isAuth: true,
            };
        }

        case "LOGIN":{
            const {token, user} = action.payload;
            localStorage.setItem("access-token", token);
            document.cookie = `access-token=${token}; path=/`;

            return{
                ...state,
                user,
                token,
                isAuth: true,
            };
        }

        case "LOGOUT":{
            localStorage.removeItem("access-token");
            document.cookie = "access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
            };
        }

        default:
            return state;
    }
}