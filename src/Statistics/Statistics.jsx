import React from 'react';
import { Paragraph } from './Statistics.styled';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total()}</Paragraph>
        <Paragraph>
          Paragraphositive feedback: {positivePercentage()}%
        </Paragraph>
      </>
    );
  }
}

export default Statistics;
