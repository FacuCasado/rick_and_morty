import { ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITES } from "./actions";


const initialState={
    myFavorites:[]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_FAVORITE:
            return {...state, myFavorites:[...state.myFavorites , action.payload]}
        case DELETE_FAVORITE:
            return {...state, myFavorites:state.myFavorites.filter((char)=>char.id!==action.payload)}
        case GET_FAVORITES:
            return { ...state, myFavorites: action.payload };
        default: return {...state}

    }
}

export default rootReducer;
