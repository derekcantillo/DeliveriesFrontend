export const AuthReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isAuthenticate:true,
                user:action.payload
            };
        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isAuthenticate:false,
                user:null
            }

    }
}