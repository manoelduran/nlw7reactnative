import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Logout, UserContainer } from './styles';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

interface HeaderProps {

}

export function Header() {
    return (
        <Container>
            <LogoSvg />
            <UserContainer>
                <TouchableOpacity>
                    <Logout>Sair</Logout>
                </TouchableOpacity>
                <UserPhoto imageUri="https://github.com/manoelduran.png" />
            </UserContainer>
        </Container>
    );
}