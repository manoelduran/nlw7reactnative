import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";

export const Container = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 20px;
`;
export const Logout = styled.Text`
font-size: 15px;
font-family: ${FONTS.REGULAR};
color: ${COLORS.GRAY_TERTIARY};
`;
export const UserImage = styled.Image`
`;


