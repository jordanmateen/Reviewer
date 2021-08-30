import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SelectFieldWithLabel from './SelectFieldWithLabel'
import ButtonUI from './ButtonUI'
class ReviewFormUI extends Component{
    constructor(){
        super()
        this.state ={
            rating: '',
            review:''
        }
    }

    handleRatingChange (event) {
        this.setState({
            rating: event.target.value
        });

    }

    handleReviewChange (event) {
        this.setState({
            review: event.target.value
        });
    }

    handleSubmit(rating, review){
        const { setReview } = this.props;
        setReview(rating, review);
    }

    render(){
        const {rating, review} = this.state
        return(
            <>
            <form>
                <div style ={{margin: '10px'}}>
                    <SelectFieldWithLabel labelValue="Stars" selectValue={this.state.rating} onChangeFunction={(e)=>{this.handleRatingChange(e)}}/>
                </div>
                <div>
                    <TextField
                    id="outlined-multiline-static"
                    label="Review"
                    multiline
                    rows={19}
                    columns={2}
                    placeholder="Leave Review..."
                    variant="outlined"
                    onChange={(e)=>{this.handleReviewChange(e)}}
                    />
                </div>
                <ButtonUI toPage='/confirmation' name="Next" onSubmitFn={()=> {this.handleSubmit(rating, review)}}/>
                </form>
            </>
        )
    }
}

export default ReviewFormUI