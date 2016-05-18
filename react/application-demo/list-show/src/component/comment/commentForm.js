import React from 'react';
import ReactDom from 'react-dom';

class CommentForm extends React.Component {
    constructor () {
        super();
        this.state = {
            author: "",
            text: ""
        };
        this._handleAuthorChange = this.handleAuthorChange.bind( this );
        this._handleTextChange = this.handleTextChange.bind( this );
        this._handleCommentSubmit = this.handleCommentSubmit.bind( this );
    }
    handleAuthorChange ( e ) {
        let value = e.target.value;
        this.setState({author: value});
    }
    handleTextChange ( e ) {
        let value = e.target.value;
        this.setState({text: value});
    }
    handleCommentSubmit ( e  ) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        this.props.onCommentSubmit( author, text );
        /*reset input*/
        this.setState({
            author: "",
            text: ""
        });
    }
    render () {
        return (
            <form className="commentForm" onSubmit={this._handleCommentSubmit}>
                <input type="text" value={this.state.author} placeholder="Your name" onChange={this._handleAuthorChange}/>
                <input type="text" value={this.state.text} placeholder="Say something" onChange={this._handleTextChange}/>
                <input type="submit" value="ADD+"/>
            </form>
        );
    }
}
export default CommentForm;