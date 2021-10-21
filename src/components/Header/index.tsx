import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Logout, UserImage } from './styles';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';


export function Header() {
    return (
        <Container>
            <LogoSvg />
            <TouchableOpacity>
                <Logout>Sair</Logout>
                </TouchableOpacity>
                <UserPhoto imageUri="https://github.com/manoelduran.png"/>
        </Container>
    );
}