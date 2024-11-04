export type StrapiUserT = {
    documentId: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    blocked: boolean;
    provider: 'local' | 'google';
    role: 'Admin' | 'Authenticated' | 'Public';
};

export type StrapiLoginResponseT = {
    jwt: string;
    user: StrapiUserT;
};