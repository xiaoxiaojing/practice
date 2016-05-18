import React from 'react';
import ReactDom from 'react-dom';
import Comment from './comment';

class CommentList extends React.Component {
    render () {
        let data = this.props.data;
        return (
            <div className="commentList">
                {
                    data.map(function( comment ){
                       return (
                           <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
                       );
                    })
                }
            </div>
        );
    }
}
export default CommentList;