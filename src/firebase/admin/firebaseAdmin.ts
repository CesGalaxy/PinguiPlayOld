import admin from 'firebase-admin';

interface FirebaseAdminAppParams {
    projectId: string;
    clientEmail: string;
    storageBucket: string;
    privateKey: string;
    databaseURL?: string;
}

function formatPrivateKey(privateKey: string) {
    return privateKey.replace(/\\n/g, '\n');
}

export function createFirebaseAdminApp({
    projectId,
    clientEmail,
    storageBucket,
    privateKey,
    databaseURL
}: FirebaseAdminAppParams) {
    if (admin.apps.length > 0) {
        return admin.app();
    }

    const cert = admin.credential.cert({
        projectId,
        clientEmail,
        privateKey: formatPrivateKey(privateKey),
    });

    return admin.initializeApp({
        credential: cert,
        storageBucket,
        projectId,
        databaseURL,
    });
}

export async function initAdmin() {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    const databaseURL = process.env.FIREBASE_DATABASE_URL;

    if (!projectId || !clientEmail || !storageBucket || !privateKey || !databaseURL) {
        throw new Error(
            'Missing Firebase environment variables. Check your .env file.'
        );
    }

    createFirebaseAdminApp({
        projectId,
        clientEmail,
        storageBucket,
        privateKey,
        databaseURL,
    });
}