import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class CommentSection extends Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    render() {

      return (
        <div>
          <h3>Comments</h3>
          <Comments items={this.state.items}  />
          <form onSubmit={this.handleSubmit}>
            <input id="cmnt" class="form-control" placeholder="Add a comment" style={{border: 'none', borderBottom: '1px solid'}}
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className="btn btn-outline-info">
              <label htmlFor="cmnt">Share Your Comment</label>
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newComment = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newComment),
        text: ''
      }));
    }
  }
  
  class Comments extends Component {
  
    render() {
      let commentDate = new Date().toLocaleString();

      return (
        <div>
          {this.props.items.map(item => (              
            <p key={item.id}><AccountCircleIcon />{ " " + item.text + " ___ " + commentDate}</p>
          ))}
        </div>
      );
    }
  }

export default CommentSection;