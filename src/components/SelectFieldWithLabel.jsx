import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const SelectFeildWithLabel = ({labelValue, selectValue, onChangeFunction}) => {
    // Note: The MenuItem's could be put into and array but I left it for simplicity purposes
    return(
        <div style ={{margin: '10px'}}>
            <InputLabel id="demo-simple-select-label">{labelValue}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectValue}
                onChange={(e) => {onChangeFunction(e)}}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
        </div>
    )
}

export default SelectFeildWithLabel;