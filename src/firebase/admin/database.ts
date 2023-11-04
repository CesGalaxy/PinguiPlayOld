import {getFirestore, Firestore, DocumentReference} from "firebase-admin/firestore";
import {DatabaseModel} from "@/firebase/database/Model";

export async function getFromDatabase<M = undefined>(
    query: ((f: Firestore) => DocumentReference) | DocumentReference,
    Model?: { new(data: any): M }
): Promise<M extends undefined ? (any | undefined) : M>{
    consoleDebugLog("FgCyan", "Reading from database...")

    const snapshot = await parseQuery(query).get()
        .then(snapshot => {
            consoleDebugLog("FgGray", "Got snapshot at: " + snapshot.ref.path);
            return snapshot;
        })
        .catch(error => {
            consoleDebugLog("FgRed", "Error reading database:");
            console.error(error);
            return undefined;
        });

    // @ts-ignore
    if (!snapshot) return undefined;

    if (!Model) {
        // @ts-ignore
        return snapshot;
    } else {
        const data = snapshot.data();

        // @ts-ignore
        if (!data) return undefined;

        try {
            // @ts-ignore
            return new Model(data)
        } catch (e: any) {
            consoleDebugLog("FgRed", "Error parsing data to model:", "FgRed,Dim", e.message);
            // @ts-ignore
            return undefined;
        }
    }
}

export async function setToDatabase(query: ((f: Firestore) => DocumentReference) | DocumentReference, data: any): Promise<void> {
    consoleDebugLog("FgCyan", "Writing to database...")

    return parseQuery(query).set(data)
        .then(() => {
            consoleDebugLog("FgGray", "Successfully written to database!");
        })
        .catch(error => {
            consoleDebugLog("FgRed,Dim", "Error writing to database:");
            console.error(error);
        });
}

export function parseQuery(query: ((f: Firestore) => DocumentReference) | DocumentReference): DocumentReference {
    const firestore = getFirestore();

    if (typeof query === "function") {
        query = query(firestore);
    }

    return query;
}

export function pathToDocument(...steps: string[]): DocumentReference {
    const firestore = getFirestore();
    return firestore.doc(steps.join("/"));
}