import NameFormUI from "./NameFormUI";
import { connect } from "react-redux";
import { getName, setName } from "../actions/actionCreators";


const mapStateToProps = (state) => {
    const firstName = state.review?.firstName
    const lastName = state.review?.lastName

    return{
        firstName,
        lastName
    }
}

const mapDispatchToProps = (dispatch) => {
    const submitName = (firstName, lastName) => {
        dispatch(setName(firstName, lastName))
    }
    const getNameOnLoad = () => {
        dispatch(getName());
    }
    return{
        submitName,
        getNameOnLoad
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NameFormUI)