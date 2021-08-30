import ReviewFormUI from "./ReviewFormUI";
import { connect } from "react-redux"
import { setReviews } from '../actions/actionCreators'

const mapStateToProps = (state) => {
    return{}
}

const mapDisatchToProps = (dispatch) => {
    const setReview = (rating,review) => {
        dispatch(setReviews(rating,review))
    }
    return{
        setReview
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(ReviewFormUI)