import React from 'react';
import ReactDom from 'react-dom';
import TaskCheckBox from './taskCheckBox';

let taskListStyle = {
    width: "98%",
    height: "30px",
    lineHeight: "30px",
    listStyle: "none",
    margin: "0 auto",
    padding: "0",
    borderBottom: "1px dotted #ccc"
};
let taskListSpanStyle = {
    float: "left",
    margin: "0px"
};
export default class TaskList extends React.Component {
    constructor () {
        super();
    }
    handleChange = ( id, value ) => {
        this.props.onListChangeHandler( id, value );
    };
    render () {
        let _this = this,
            listData = this.props.data;
        return (
            <div>
                {
                    listData.map(function(value, index, array){
                        let checkInput  = "";
                        return (
                            <li key={value.id} style={taskListStyle}>
                                <TaskCheckBox onChangeHandler={_this.handleChange} data={value}/>
                                <label style={taskListSpanStyle} htmlFor={value.id}>{value.text}</label>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}