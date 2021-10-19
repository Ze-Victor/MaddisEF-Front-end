import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    align-items: center;
    justify-content: center;
`;
export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 500px;
    height: 500px;

    border: solid 10px var(--color-border);
    border-radius: 100%;

`;
export const FormLogin = styled.form`

    display: flex;
    flex-direction: column;

    >input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 13px 18px;
    font-size: 14px;
    margin-top: 18px;
  }
  > button {
    margin-top: 18px;
    padding: 13px 18px;
    font-size: 16px;
    border: none;
    background: var(--color-blue);
    color: var(--color-tertiary);
    &:hover{
      opacity: 0.87;
    }
  }

`;