import React from 'react';
import { Container } from './Section.styled';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    );
  }
}

export default Section;
