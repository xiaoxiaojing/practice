import React from 'react';
import ReactDom from 'react-dom';
import Ajax from './component/ajax';
import TaskAddInput from './component/taskTodo/taskTopBar/taskAddInput';
import TaskSearchInput from './component/taskTodo/taskTopBar/taskSearchInput';
import TaskList from './component/taskTodo/taskList/taskList';
import TaskBottomBar from './component/taskTodo/taskBottomBar/taskBottomBar';

//style
let taskBoxStyle = {
    position: "relative",
    width:"500px",
    height: "400px",
    background: "#eee",
    margin: "20px auto",
    borderRadius: "5px",
    overflow: "hidden"
};
let taskTopStyle = {
    position: "relative",
    width:"99%",
    height: "60px",
    background: "#ddd",
    margin: "2px auto",
    overflow: "hidden"
};
let taskListBoxStyle = {
    width: "98%",
    height: "280px",
    overflowY: "auto",
    background: "#fff",
    margin: "0 auto",
    padding: "0"
};
let taskListPStyle = {
    width: "100%",
    fontSize: "18px",
    margin: "10 auto",
    textAlign: "center"
};
class App extends React.Component {
    constructor () {
        super();
        this.state = {
            local: {
                searchKey: "",
                radioIndex: -1
            },
            online: []
        };
    };
    componentDidMount () {
        let _this = this;
        var data = "";
        // Ajax.get(function( data ){
            //get data
            let newState = _this.state;
            //update state
            Object.assign(newState.online, data ? data : [{id:1, text: "123", done: 0},{id:2, text: "456", done: 1}, {id:3, text: "147", done: 1}]);
            //set state
            _this.setState(newState);
        // });
    };

    /**
     * get list data
     * @param data
     * @returns {Array}
     */
    getListData = ( data ) => {
        let allList = data.online,
            searchKey = data.local.searchKey,
            searchKeyObj = new RegExp( searchKey ),
            radioIndex = data.local.radioIndex,
            showList = [];
        //filter data list
        showList = allList.filter(function ( value, index, array) {
            if ( value ) {
                var text = value.text,
                    isDone = value.done;
                if ( (radioIndex !== -1 && radioIndex === isDone) || radioIndex === -1 ) {
                    if ( (searchKey !== "" && searchKeyObj.test( text )) || searchKey === "" ) {
                        return true;
                    }
                }
                return false;
            }
        });
        return showList;
    };
    /**
     * list checkbox change
     * @param  {string}  id        
     * @param  {Boolean} isChecked 
     */
    handleListChange = ( id, isChecked ) => {
        let listData = this.state.online;
        listData.forEach((value)=>{
            if ( value.id == id ) {
                value.done = isChecked ? 1 : 0;
            }
        });
        this.setState({online: listData});
    };
    handlerSearchKeyUp = ( value ) => {
        let oldLocal = this.state.local;
        oldLocal.searchKey = value;
        this.setState({local: oldLocal});
    };
    /**
     * bottom radio change
     * @param  {int} radioIndex
     */
    handleBottomBarChange = ( radioIndex ) => {
        let oldLocal = this.state.local;
        oldLocal.radioIndex = radioIndex;
        this.setState({local: oldLocal});
    };
    render () {
        let pageData = this.state,
            listData = this.getListData( pageData );
        let listDataLen = listData ? listData.length : 0;
        const liDom = listDataLen <= 0 ? <p style={taskListPStyle}>ADD ONE!</p> : <TaskList data={listData} onListChangeHandler={this.handleListChange}/>;
        return (
            <div style={taskBoxStyle}>
                <div style={taskTopStyle}>
                    <TaskAddInput/>
                    <TaskSearchInput data={pageData.local.searchKey} onKeyUpHandler={this.handlerSearchKeyUp}/>
                </div>
                <div style={taskListBoxStyle}>{liDom}</div>
                <TaskBottomBar data={pageData.local.radioIndex} onChangeHandler={this.handleBottomBarChange}/>
            </div>
        );
    }
}
ReactDom.render(
    <App/>,
    document.getElementById( "app" )
);