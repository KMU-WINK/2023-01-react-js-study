import styled from 'styled-components';

export const StyledH2 = styled.div`
  font-size: 40px;
  font-weight: ${props => (props.bold ? '800' : '400')};
  color: ${props => (props.color ? 'blue' : 'black')};
  font-style: ${props => (props.italic ? 'italic' : 'none')};
  margin-top: 20px;
`;
