import styled from 'styled-components';

export const Background = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(232, 233, 235, 0.04) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(108.39deg, #324376 -6.78%, #586BA4 105.75%);
`;

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: calc(var(--spacing-big) * 4);

  & .title {
    margin-top: calc(var(--spacing-big) * 2);
    margin-bottom: var(--spacing-big);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
