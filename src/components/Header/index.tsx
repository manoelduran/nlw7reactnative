import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Logout, UserContainer } from './styles';
import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';
import { useAuth } from '../../hooks/auth';

interface HeaderProps {

}

export function Header() {
    const { signOut, user } = useAuth()
    return (
        <Container>
            <LogoSvg />
            <UserContainer>
                {user &&
                    <TouchableOpacity onPress={signOut}>
                        <Logout>Sair</Logout>
                    </TouchableOpacity>
                }
                <UserPhoto imageUri={user?.avatar_url} />
            </UserContainer>
        </Container>
    );
}