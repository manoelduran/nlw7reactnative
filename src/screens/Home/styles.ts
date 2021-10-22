import styled from 'styled-components/native';
import {COLORS, FONTS} from '../../theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
flex: 1;
background-color: ${COLORS.BLACK_SECONDARY};
padding-top: ${getStatusBarHeight() + 17}px;
` 