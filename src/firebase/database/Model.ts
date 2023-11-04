import {getDatabase} from "firebase-admin/database";

// export interface DatabaseModelParser<M extends DatabaseModel<any>> {
//     toFirestore(model: M): any;
//     toModel(data: any): M;
//     model: { new(data: any): M };
// }

export abstract class DatabaseModel<T extends object> {
    public data: T;

    constructor(data: any) {
        const parsedData = this.mount(data);

        if (!parsedData) {
            throw new Error("Failed to mount data to model!");
        }

        this.data = parsedData;
    }

    public abstract mount(data: any): T | undefined;
    public abstract toFirestore(): any;

    static async getFromDatabase(query: ((f: any) => any) | any): Promise<any | undefined> {

    }
}