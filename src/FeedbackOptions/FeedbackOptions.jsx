import React from 'react';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map(option => (
          <Button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
