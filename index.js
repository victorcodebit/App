import React, { Component } from 'React';
import ReactDOM from 'ReactDOM';

class HelloMessage extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);
