import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import * as AuthSessions from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

interface AuthProviderProps {
    children: React.ReactNode,
}

interface User {
    id: string,
    avatar_url: string,
    name: string,
    login: string,
}

interface AuthResponse {
    token: string;
    user: User;
}

interface AuthorizationResponse {
    params: {
        code?: string;
        error?: string;
    },
    type?: string;
}

interface AuthContextData {
    user: User | null,
    isSigning: boolean,
    signIn: () => Promise<void>,
    signOut: () => Promise<void>,
}
export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isSigning, setIsSigning] = useState(true);
    const CLIENT_ID = '71e0046b0512ca42dcb5'
    const SCOPE = 'read:user'
    const USER_STORAGE = '@nlwheat:user'
    const TOKEN_STORAGE = '@nlwheat:token'

    async function signIn() {
        try {
            setIsSigning(true)
            const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
            const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse;
            if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
                const authResponse = await api.post('/authenticate', { code: authSessionResponse.params.code });
                const { token, user } = authResponse.data as AuthResponse;
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
                await AsyncStorage.setItem(TOKEN_STORAGE, token)
                setUser(user)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsSigning(false)
        }
    }
    async function signOut() {
        setUser(null)
        await AsyncStorage.removeItem(USER_STORAGE);
        await AsyncStorage.removeItem(TOKEN_STORAGE);
    }

    useEffect(() => {
        async function loadUserStorageData() {
            const userStorage = await AsyncStorage.getItem(USER_STORAGE);
            const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);
            if (userStorage && tokenStorage) {
                api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`
                setUser(JSON.parse(userStorage))
            }
            setIsSigning(false)
        }
        loadUserStorageData();
    }, [])
    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            isSigning,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider, useAuth
}