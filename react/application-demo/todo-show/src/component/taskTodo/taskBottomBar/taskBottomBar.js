import React from 'react';
import ReactDom from 'react-dom';
import Radio from './taskBootomRadio';
let taskBootomStyle = {
    width: "99%",
    height: "54px",
    background: "#ddd",
    margin: "0 auto"
};
export default class TaskBottomBar extends React.Component {
    constructor ( props ) {
        super( props );
    }
    handerChange = ( tag, checked ) => {
        var radioIndex = -1,
            radioArray = {
                both: -1,
                done: 1,
                not: 0
            };
        if ( checked ) {
            radioIndex = radioArray[tag];
        }
        this.props.onChangeHandler( radioIndex );
    };
    render () {
        let radioIndex = this.props.data;
        let radioObj = {
            both: false,
            done: false,
            not: false
        };
        switch( radioIndex ){
            case -1: radioObj.both = true; break;
            case 1: radioObj.done = true; break;
            case 0: radioObj.not = true; break;
        };
        return (
            <div style={taskBootomStyle}>
                <Radio text="全部" data={{tag:"both", isChecked: radioObj.both}} onChangeHandler={this.handerChange}/>
                <Radio text="已完成" data={{tag:"done", isChecked: radioObj.done}} onChangeHandler={this.handerChange}/>
                <Radio text="未完成" data={{tag: "not", isChecked: radioObj.not}} onChangeHandler={this.handerChange}/>
            </div>
        );
    }
}