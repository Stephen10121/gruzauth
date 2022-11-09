declare type ReturnVal = {
    error: boolean;
    errorMessage?: string;
    trigger?: () => boolean;
};
export default function authenticationPopup(post_server: string, socket_id: string): ReturnVal;
export {};
