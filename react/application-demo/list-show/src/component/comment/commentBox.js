import React from 'react';
import ReactDom from 'react-dom';
import CommentList from './commentList';
import CommentForm from './commentForm';

export default class CommentBox extends React.Component {
    render () {
        const commentListDom = !this.props.data.online ? <p>List is empty!</p> : <CommentList data={this.props.data.online}/>;
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                {commentListDom}
                <CommentForm onCommentSubmit={this.props.onCommentSubmit}/>
            </div>
        );
    }
}