import React from 'react';
import ReactDom from 'react-dom';
import Ajax from './component/ajax';
import CommentBox from './component/comment/commentBox';
class App extends React.Component {
    constructor () {
        super();
        this.state = {
            local: ""
        };
        this._handleCommentSubmit = this.handleCommentSubmit.bind( this );
    }
    componentDidMount () {
        //get data
        let that = this;
        Ajax.get(function( data ){
            that.setState({online: data});
        });
        // var data = [
        //     {id: 1, author: "Pete Hunt", text: "This is one comment"},
        //     {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
        // ];
        // Ajax.set( data ,function( data ){
        //     that.setState({online: data});
        // });
    }
    handleCommentSubmit ( author, text ) {
        let data = !this.state.online ? [] : this.state.online;
        let that = this,
            id = !data || data.length === 0 ? 0 : data[data.length-1].id;
        data.push({
            id:  id + 1,
            author: author,
            text: text
        });
        Ajax.set(data, function( res ){
            that.setState({online: res});
        });
    }
    render () {
        return (
            <div>
                <CommentBox data={this.state} onCommentSubmit={this._handleCommentSubmit}/>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById( "app" )
);