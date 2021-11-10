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

export const Resource = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >span {
        margin-top: 20px;
    }
    >img {
        margin-top: 30px;
    }
    >p {
        margin-top: 30px;
    }
    > button {
        margin-bottom: 30px;
        margin-top: 20px;
        padding: 6px 11px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        background: var(--color-blue);
        color: var(--color-tertiary);
        &:hover{
            opacity: 0.87;
            cursor: pointer;
        }
}`;