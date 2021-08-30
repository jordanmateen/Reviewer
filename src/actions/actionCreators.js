import * as types from './constants'

export const setName = (firstName, lastName)=>{
    return{
        type: types.SUBMIT_NAME,
        data: {
            firstName,
            lastName
        }
    }
};

export const setReviews =(rating, review)=>{
    return{
        type: types.SET_REVIEW,
        data: {
            rating,
            review
        }
    }
};