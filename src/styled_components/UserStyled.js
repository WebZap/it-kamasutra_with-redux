import styled from "styled-components";


export const StyledPageContainer = styled.div`
    background-color: #f6fffe;
    margin-bottom: 20px;
    min-width: 300px;
    text-align: center;
`;
export const StyledPage = styled.p`
    margin-right: 10px;
    font-size: 25px;
    display: inline-block;
    cursor: pointer;
`;

export const ActiveStyledPage = styled(StyledPage)`
    font-weight: bold;
    text-decoration: underline;
    font-size: 28px;
    color: #4f0404;
`;