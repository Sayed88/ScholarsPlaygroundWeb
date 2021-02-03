import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class CommentSection extends React.Component {
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
          <Comments items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <button>
                Your Comment
            </button>
            <input style={{paddingRight: '200px'}}
              onChange={this.handleChange}
              value={this.state.text}
            />
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
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class Comments extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
              
            <p key={item.id}><AccountCircleIcon />{ " " + item.text}</p>
          ))}
        </ul>
      );
    }
  }

export default CommentSection;