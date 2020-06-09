const INTIAL_STATE={
    username:'',
    // url:'',
    loading:false,
    islogin:false,
    errormes:'',
    role:'',
    dataKucing: [],
    image: '',
}

export default (state=INTIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_START' :
            return{...state, username:action.payload, islogin:true}
        case 'LOGIN_FAILED' :
            return{...state, loading:false, errormes:'Lengkapi data'}
        case 'GET_DATA' :
            return{...state, dataKucing: action.payload}
        case 'IMAGE' :
            return{...state, image: action.payload}
        case 'LOGOUT' :
            return {...state, islogin:false, username:''}
        default :
            return state
    }
}