import styled from "styled-components/native";
import { COLORS, FONTS } from "../../theme";




export const MessageText = styled.Text`
font-size: 15px;
font-family: ${FONTS.REGULAR};
    color: ${COLORS.WHITE};
    line-height: 20px;
    margin-bottom: 12px;
`;

export const MessageContent = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Username = styled.Text`
font-size: 15px;
line-height: 24px;
font-family: ${FONTS.REGULAR};
color: ${COLORS.WHITE};
margin-left: 16px;
`;