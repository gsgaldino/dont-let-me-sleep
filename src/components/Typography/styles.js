import styled from 'styled-components';

export const Container = styled.div.attrs((props) => ({
  as: props.as,
}))`
  color: #333;
  font-family: "Arial", sans-serif;
`;
