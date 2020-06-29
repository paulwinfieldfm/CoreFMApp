export interface IServerApplicationUser {
    uid: string,
    displayName: string,
    email: string,
    emailVerified: boolean,
    isAnonymous: boolean,
    phoneNumber?: string,
    photoUrl?: string,
}