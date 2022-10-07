import styled from "styled-components";

const BoxStyle = styled.div`
   display: flex;
    margin: 24px;
`;

export const Box = ({ children }) => (
    <BoxStyle>
        <div className="box">{children}</div>
    </BoxStyle>
);
