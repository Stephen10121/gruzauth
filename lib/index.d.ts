declare type ReturnVal = {
    error: boolean;
    errorMessage?: string;
};
export default function authenticationPopup(post_server: string, socket_id: string): ReturnVal;
export {};
