import { Component } from 'react'
import ButtonUI from './ButtonUI'
import Input from './Input'

class NameFormUI extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    componentDidMount(){
        fetch('https://swapi.dev/api/people/1')
        .then(res => res.json())
        .then( res => {
            const splitName = res.name.split(' ');
            const firstName = splitName[0];
            const lastName = splitName[1];
            this.setState({
                firstName,
                lastName
            })
        })
    }

    updateFirstName(e){
       this.setState({
           firstName: e.target.value
       });
    }
    updateLastName(e){
        this.setState({
            lastName: e.target.value
        });
     }

    handleSubmit(firstName,lastName){
        const { submitName } = this.props;
        submitName(firstName,lastName);
    }

    render() {
        const {firstName, lastName} = this.state
        return(
           <form className = 'form'>
                <Input labelValue='First Name' inputValue = {this.state.firstName} onChangeFunction={(e)=> {this.updateFirstName(e)}} />
                <Input labelValue='Last Name' inputValue = {this.state.lastName} onChangeFunction={(e)=> {this.updateLastName(e)}} />
                <ButtonUI toPage='/review' name="Next" onSubmitFn={()=> {this.handleSubmit(firstName,lastName)}}/>
           </form>
        )
    }
}

export default NameFormUI
