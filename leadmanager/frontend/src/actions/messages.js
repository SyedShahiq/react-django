import { CREATE_MESSAGES } from './types';

export const CreateMessage = msg => {
    return {
        type: CREATE_MESSAGES,
        payload: msg
    }
}