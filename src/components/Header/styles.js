import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.borderRadius};

  button {
    font-size: 16px;
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
