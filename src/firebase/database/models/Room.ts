import {DatabaseModel} from "@/firebase/database/Model";

export interface RoomSchema {
    owner: true;
}

export default class RoomModel extends DatabaseModel<RoomSchema> {
    public mount(data: any): RoomSchema | undefined {
        if (!data) return;
        if (!data.owner) return;

        return data as RoomSchema;
    }

    public toFirestore(): any {
        return this.data;
    }
}

// export default {
//     toFirestore(model: RoomModel): any {
//         return model.data;
//     },
//     toModel(data: any): RoomModel | undefined {
//         if (!data.owner) return;
//
//         return new RoomModel(data);
//     },
//     model: RoomModel
// } as DatabaseModelParser<RoomModel>;