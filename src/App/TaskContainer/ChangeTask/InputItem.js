import React from 'react';
import 'typeface-roboto';
import TextField from "@material-ui/core/TextField/TextField";

class InputItem extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.handleChange(e.target.value)
    }

    render(){
        const label = this.props.label;
        const value = this.props.value;
        return(
            <div>
                <TextField
                    label={label}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </div>
        )

    }
}

export default InputItem;