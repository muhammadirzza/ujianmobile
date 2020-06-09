import Axios from 'axios';

export const getData = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=10',
                {headers:{
                    " X-Api-Key" : "e6af47e2-e287-4920-9d5d-ab94947b49f9"
                }}
            )
            
            // console.log(res.data)
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}

export const imageAction = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'IMAGE',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const LoginUser=(data) => {
        return{
            type:'LOGIN_START',
            payload:data
        }
}

export const LoginFailed=() => {
    return{
        type:'LOGIN_FAILED',
    }
}

export const errormessageclear=()=>{
    return {
        type:'ErrorClear'
    }
}

export const Logout=()=>{
    return {
        type:'LOGOUT'
    }
}