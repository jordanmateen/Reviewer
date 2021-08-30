import {Component} from 'react'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

class ButtonUI extends Component {

    render(){
        return(
            <div style={{margin:'30px'}}>
                <Button component ={Link} to={this.props.toPage} color="primary" onClick={()=>{this.props.onSubmitFn()}}>{this.props.name}</Button>
            </div>
        )
    }
}

export default ButtonUI