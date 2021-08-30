import {SET_RATINGS, SUBMIT_NAME, SET_REVIEW } from "../actions/constants"

const initialState = {
    review:{
        firstName:'',
        lastName: '',
        customerReview: {
            rating: '',
            review: ''
        }
    }
}

export const reducer = (state = initialState, action) => {
    const { type, data } = action
    switch(type) {
        case SUBMIT_NAME :
            return{
                ...state,
                review:{
                    firstName: data.firstName,
                    lastName: data.lastName
                }
            }
        case SET_RATINGS : 
            return {
                ...state,
                customerReview:{
                    rating: data
                }
            }   
        case SET_REVIEW : 
            return {
                ...state,
                customerReview:{
                    rating: data.rating,
                    review: data.review
                }
            }
        default:
            return state
    }
}
