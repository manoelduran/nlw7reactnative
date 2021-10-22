import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import io from 'socket.io-client';
import {MESSAGES_EXAMPLE} from '../../utils/messages'
import { Message } from '../Message';
import { Container } from './styles';

let messagesQueue: Message[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
    messagesQueue.push(newMessage);
    console.log(newMessage)
});

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<Message[]>([]);
    useEffect(() => {
        async function fetchMessages() {
            const messagesResponse = await api.get<Message[]>('/messages/last3');
            setCurrentMessages(messagesResponse.data)
        }
        fetchMessages()
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            if (messagesQueue.length > 0) {
                setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]]);
                messagesQueue.shift();
            }
        }, 3000);
        return () => clearInterval(timer)
    }, [])
    return (
        <Container>
            {currentMessages.map(message =>
                <Message key={message.id} data={message}  />
            )}
        </Container>
    );
}