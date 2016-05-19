import React from 'react';
import ReactDom from 'react-dom';
let radioBoxStyle = {
    width: "60px",
    height: "100%",
    lineHeight: "54px",
    float: "left",
    marginLeft: "20px",
    overflow: "hidden"
};
export default class TaskBottomRadio extends React.Component {
    constructor () {
        super();
    }
    handleChange = ( value ) => {
        let tag = value.target.id,
            checked = value.target.checked;
        this.props.onChangeHandler( tag, checked );
    };
    handle = () => {
        console.log( 1 );
    }
    render () {
        return (
            <div style={radioBoxStyle} onClick={this.handle}>
                <input id={this.props.data.tag} type="radio" onChange={this.handleChange} checked={this.props.data.isChecked}/>
                <label htmlFor={this.props.data.tag}>{this.props.text}</label>
            </div>
        );
    }
}