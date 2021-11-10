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
    justify-content: space-around;

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

    .update{
        background-color: #49A307;
    }

    .delete{
        background-color: #D32C2C;
    }

`;
export const NewResource = styled.div`
    display: flex;
    width: 800px;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    >a{
        >button {
        width: 80px;
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
    }
`;