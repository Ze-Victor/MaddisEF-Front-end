import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Header = styled.div`
  z-index: 3;
  background: var(--color-border);
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  > h1 {
    display: flex;
    align-items: center;
    color: var(--text-color);
    margin-left: 10px;
    font-size: 29px;
    background-color: var(--color-border);
  }
  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;