import React, { Component, Fragment } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seen: true,
            comment: '',
            data: props.data,
        };
        // console.log('aaaaaaaaaaaaa', props);
    }

    componentWillMount() {
        // Lấy dât từ Server
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }


    render() {
        const { author, status, likes, comments } = this.props.data
        // console.log('aaaaaaaaaa', this.state);
        let backgroundColor = this.state.seen ? '#3a3a3a' : '#b53b3b';
        let style = {
            margin: 'auto',
            width: '500px',
            border: 'solid 1px #000',
            borderRadius: '3px',
            padding: '20px',
            backgroundColor,
            color: '#fff',

        }
        // console.log('1111111111111111111', backgroundColor);
        return (
            <Fragment>
                <div className="cardStatus" style={style}>
                    <h5>{author}</h5>
                    <p>{status}</p>
                    <div className="info">
                        <p>{likes} likes</p>
                        {/* <span>{this.state.comment}</span> */}
                        <button onClick={() => this.seen()}>Seen</button>
                        <button onClick={() => this.test()}>test</button>
                    </div>
                    <div className="comments">
                        <input type="text" placeholder="comment here" value={this.state.comment} onChange={(ev) => this.onCommentChange(ev)}></input>

                        <button onClick={() => this.addComment()}>Add comment</button>
                        <br></br>
                        {comments && comments.map(comment => (
                            <Fragment>
                                <span><b>{comment.author}</b> đã bình luận: </span>
                                <span>{comment.comment}</span>
                                <br></br>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    }

    onCommentChange(ev) {
        console.log('111111111111111111');
        // this.state.comment = ev.target.value
        this.setState({
            comment: ev.target.value
        })
    }

    addComment() {
        let comment = this.state.comment;
        let obj = {
            // comment: comment,
            author: 'Văn Đức',
            comment
        }
        let data = this.state.data;
        console.log('aaaaaaaaaaaa', data);
        // data.comments.push(obj)
        // this.setState({
        //     data
        // })
        this.props.data.comments.push(obj);
        this.setState(this.state)

    }

    seen() {
        // console.log('aaaaaaaaaaaaaaaaaaaaa');
        // this.state.seen = !this.state.seen;
        this.setState({
            seen: !this.state.seen
        })
    }

    test() {
        console.log('qqqqqqqqqqqqqqqqqqqqqq', this.state);
    }
}

export default Card