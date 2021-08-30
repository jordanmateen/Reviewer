import NameFormUI from "./NameFormUI";
import { connect } from "react-redux";
import { setName } from "../actions/actionCreators";


const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    const submitName = (firstName, lastName) => {
        dispatch(setName(firstName, lastName))
    }
    return{
        submitName
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NameFormUI)