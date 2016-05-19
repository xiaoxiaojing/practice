import React from 'react';
import ReactDom from 'react-dom';
let taskSearchInputBox = {
    position: "absolute",
    width: "200px",
    height: "30px",
    top: "15px",
    right: "10px"
};
let taskSearchInputStyle = {
    width: "140px",
    height: "30px",
    lineHeight: "30px",
    border: "1px solid #888",
    outline: "none",
    borderRadius: "5px",
    position: "absolute",
    padding: "0 20px 0 35px",
    background: "transparent",
    color: "#888"
};
export default class TaskSearchInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: props.data
        };
    };
    handleChange = ( event ) => {
        let value = event.target.value;
        this.setState({value:value});
    };
    handlerKeyUp = ( event ) => {
        if ( event.keyCode === 13 ) {
            let value = event.target.value;
            this.props.onKeyUpHandler( value );
        }
    };
    handlerCloseClick = () => {
        this.setState({value:""});
        this.props.onKeyUpHandler( "" );
    };
    render () {
        return (
            <div style={taskSearchInputBox}>
                <p className="search-icon-box">
                    <span className="search-icon-circle"></span>
                    <span className="search-icon-line"></span>
                </p>
                <input type="text" style={taskSearchInputStyle} onKeyUp={this.handlerKeyUp} onChange={this.handleChange} value={this.state.value}/>
                <span className="search-close" onFocus={this.handlerCloseFocus} onClick={this.handlerCloseClick}>x</span>
            </div>
        );
    };
}