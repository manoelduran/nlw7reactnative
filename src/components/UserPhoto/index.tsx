import React from 'react';
import AvatarImg from '../../assets/avatar.png';
import { Image } from './styles';

const SIZES = {
    SMALL: {
        containerSize: 32,
        avatarSize: 28,
    },
    NORMAL: {
        containerSize: 48,
        avatarSize: 42,
    }
}

interface UserPhotoProps {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL'
}

const AVATAR_DEFAULT = Image.resolveAssetSource(AvatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: UserPhotoProps) {
    const { containerSize, avatarSize } = SIZES[sizes]
    return (

        <Image source={{ uri: imageUri || AVATAR_DEFAULT }}
            style={[
                {
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                }
            ]}
        />

    );
}