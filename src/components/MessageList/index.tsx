import React from 'react';
import { Message } from '../Message';
import { Container } from './styles';

export function MessageList() {
    const message = {
        id: '1',
        text: 'mensagem',
        user: {
            name: 'manoel duran',
            avatar_url: 'https://github.com/manoelduran.png',
        },
    }
    return (
        <Container>
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </Container>
    );
}