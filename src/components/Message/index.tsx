import { MotiView } from 'moti';
import React from 'react';
import { UserPhoto } from '../UserPhoto';

import { MessageText, MessageContent, Username } from './styles';

interface MessageProps {
    data: Message;
}

export function Message({ data }: MessageProps) {
    return (
        <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{opacity: 1, translateY: 0}}
            transition={{type: 'timing', duration: 700}}
            style={[{
                width: "100%",
                marginBottom: 36,
            }

            ]}>
            <MessageText>
                {data.text}
            </MessageText>
            <MessageContent>
                <UserPhoto sizes="SMALL" imageUri={data.user.avatar_url} />
                <Username>{data.user.name}</Username>
            </MessageContent>
        </MotiView >
    );
}