import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 20px;
`;

export const UserContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Logout = styled.Text`
font-size: 15px;
margin-right: 20px;
font-family: ${FONTS.REGULAR};
color: ${COLORS.GRAY_TERTIARY};
`;



