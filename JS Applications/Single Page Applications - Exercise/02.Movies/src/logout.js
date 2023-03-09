import { router } from './router.js';

export function logout() {
    sessionStorage.clear();
    router('/login');
}