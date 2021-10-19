import styled from "styled-components";

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;

`;

export  const FormArea = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 50px;

    > span{
        margin-top: 18px;
        font-size: 12px;
    }
`;

export const Form = styled.form`

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