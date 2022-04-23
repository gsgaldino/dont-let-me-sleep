import styled, { css } from 'styled-components';

const BodyDefault = css`
  &.body-default {
    font-size: 22px;
  }
`;

const H2Bold = css`
  &.h2-bold {
    font-size: 1.7em;
    font-weight: 700;
  }
`;

export const Container = styled.div.attrs((props) => ({
  as: props.as,
}))`
  color: ${({ color }) => (color === 'dark' ? '#333' : '#E8E9EB')};
  font-family: var(--font-family);

  ${BodyDefault}
  ${H2Bold}
`;
