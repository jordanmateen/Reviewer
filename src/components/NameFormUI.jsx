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
        // replaced with middle ware but will leave here for learning;


        // fetch('https://swapi.dev/api/people/12')
        // .then(res => res.json())
        // .then( res => {
        //     const splitName = res.name.split(' ');
        //     const firstName = splitName[0];
        //     const lastName = splitName[1];
        //     this.setState({
        //         firstName,
        //         lastName
        //     })
        // })
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
        const {firstName, lastName} = this.props
        return(
           <form className = 'form'>
                <Input labelValue='First Name' inputValue = {firstName} onChangeFunction={(e)=> {this.updateFirstName(e)}} />
                <Input labelValue='Last Name' inputValue = {lastName} onChangeFunction={(e)=> {this.updateLastName(e)}} />
                <ButtonUI toPage='/review' name="Next" onSubmitFn={()=> {this.handleSubmit(firstName,lastName)}}/>
           </form>
        )
    }
}

export default NameFormUI
