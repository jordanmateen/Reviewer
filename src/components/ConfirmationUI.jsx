import { Component } from 'react'
import ButtonUI from './ButtonUI'

class ComfirmationUI extends Component {

    generateConfirmationNumber(){
        return Math.floor(Math.random() * 900000) + 100000
    }
    handleSubmit(){
        const {reviewerName, rating, review} = this.props
        //This will route to a server route the submit data externally
        fetch('http://localhost:2340/postReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({reviewerName, rating, review}),
        })
        .then(response => {
            console.log(response)
            response.json()
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    render(){
        const {reviewerName, rating, review} = this.props
        return(
            <>
                <div className ='confirmation'>
                    <div className ='confirmation-header'>
                        <div>
                            Confirmation # {this.generateConfirmationNumber() }
                        </div>
                    </div>
                    <div className='confirmation-content'>
                        <div>Name: {reviewerName}</div>
                        <div>Rating: {rating }</div>
                        <div>Review: {review} </div>
                    </div>
                </div>
                <ButtonUI toPage='/submit' name="Submit" onSubmitFn={()=> {this.handleSubmit()}}/>
            </>
        )
    }
}

export default ComfirmationUI