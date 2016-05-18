import React from 'react';
import ReactDom from 'react-dom';

class Comment extends React.Component {
    rawMarkup () {
        var rawMarkup = this.props.children.toString();//marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    }
    render () {
        return (
            <div className="comment">
                <spam className="commentAuthor">
                    {this.props.author}
                </spam>
                :
                <span className="commentText" dangerouslySetInnerHTML = {this.rawMarkup()} />
            </div>
        );
    }
}
export default Comment;