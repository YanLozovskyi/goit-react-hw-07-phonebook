import PropTypes from 'prop-types';
import { StyledSection, Container, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <StyledSection>
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
