import ComfirmationUI from "./ConfirmationUI";
import { connect } from 'react-redux'
import { getReviewerName } from "../selectors/stateSelectors";

const mapStateToProps = (state)=> {
    // Line 7 uses a selector. Not needed for react but a good way to have reusability
    const reviewerName = getReviewerName(state)
    const rating = state.customerReview?.rating
    const review = state.customerReview?.review
    return{
        reviewerName,
        rating,
        review
    }
}
export default connect (mapStateToProps, {})(ComfirmationUI)