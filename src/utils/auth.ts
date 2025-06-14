// utils/auth.ts

const TOKEN_KEY = "token";

// Guardar token
export const saveToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

// Obtener token
export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

// Eliminar token (logout)
export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};
