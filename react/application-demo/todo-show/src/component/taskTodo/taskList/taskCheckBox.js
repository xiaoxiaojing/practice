import React from 'react';
import ReactDom from 'react-dom';

let taskListInputStyle = {
    float: "left",
    margin: "9px 10px 0px 10px"
};
export default class TaskCheckBox extends React.Component {
    constructor () {
        super();
    }
    handleChange = ( value ) => {
        let checked = value.target.checked,
            id  = value.target.id;
        this.props.onChangeHandler( id, checked );
    };
    render () {
        let _this = this;
        let isChecked = this.props.data.done == 1 ? true : false
        return (
            <div>
                <input type="checkbox" style={taskListInputStyle} onChange={_this.handleChange} checked={isChecked} id={_this.props.data.id}/>
            </div>
        );
    }
}