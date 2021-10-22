import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
`;
export const BoxArea = styled.div`

    width: 720;
    margin: 20px 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


`;
export const Resource = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    background-color: var(--color-border);
    align-items: center;
    justify-content: center;
    margin: 20px 30px;

    >h1{
        font-size: 22px;
        background-color: inherit;
    }
    >span {
        font-size: 16px;
        margin-top: 8px;
        background-color: inherit;
    }
    > button {
        margin-top: 18px;
        padding: 8px 13px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        background: var(--color-blue);
        color: var(--color-tertiary);
        &:hover{
            opacity: 0.87;
            cursor: pointer;
        }
    }
`;
export const NewResource = styled.div`
    display: flex;
    width: 720px;
    justify-content: end;
    align-items: center;
    margin-top: 15px;
    >button {
        width: 80px;
        margin-top: 18px;
        padding: 8px 13px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        background: var(--color-blue);
        color: var(--color-tertiary);
        > a {
            background-color: inherit;
            color: inherit;
            text-decoration: none;
        }
        &:hover{
            opacity: 0.87;
            cursor: pointer;
        }
    }
`;