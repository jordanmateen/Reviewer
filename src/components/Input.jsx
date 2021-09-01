import TextField from '@material-ui/core/TextField'

const Input = ({inputValue, onChangeFunction, labelValue}) => {
    return (
        <div className = 'input'>
            <TextField value = {inputValue} id="outlined-basic" label={labelValue} variant="outlined" onChange={(e)=> {onChangeFunction(e)}} />
        </div>
    )
}

export default Input;