import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    flex-wrap: wrap;
    > a {
            background-color: inherit;
            color: inherit;
            text-decoration: none;
    }
`;
export const HeaderTitle = styled.div`
    width: 800px;
    display: flex;
    margin-top: 30px;
    border-bottom: 1px solid var(--color-border);
    align-items: center;
    justify-content: center;
    >h1{
        margin-bottom: 20px;
        font-size: 40px;
    }
`;
export const BoxArea = styled.div`

    width: 720;
    margin: 20px 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


`;
export const Resource = styled.div`
    display: flex;
    width: 800px;
    height: 80px;
    background-color: var(--color-border);
    align-items: center;
    justify-content: space-between;
    margin-top: 1px;

`;
export const TitleResource = styled.div`
    margin-left: 30px;
    background-color: inherit;
    >h1{
        font-size: 22px;
        background-color: inherit;
    }
`;
export const ButtonArea = styled.div`

    display: flex;
    flex-direction: row;
    background-color: inherit;
    width: 300px;
    align-items: center;
    justify-content: end;
    margin-right: 30px;

    > button {
        padding: 6px 11px;
        font-size: 12px;
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
export const ButtonResource = styled.div`
    display: flex;
    width: 800px;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    >button {
        width: 120px;
        margin-top: 18px;
        padding: 8px 13px;
        font-size: 12px;
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
export const FilterResource = styled.div`
    display: flex;
    align-items: center;
    > input {
        background: var(--color-tertiary);
        border: 1px solid var(--color-border);
        padding: 6px 18px;
        font-size: 14px;
        margin-top: 18px;
    }
    >button {
        width: 60px;
        margin-top: 18px;
        padding: 8px 13px;
        font-size: 12px;
        border: none;
        background: var(--color-blue);
        color: var(--color-tertiary);
        &:hover{
            opacity: 0.87;
            cursor: pointer;
        }
    }

`;