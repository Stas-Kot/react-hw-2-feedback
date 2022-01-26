import React from 'react';

class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <h4>{message}</h4>;
  }
}

export default Notification;
