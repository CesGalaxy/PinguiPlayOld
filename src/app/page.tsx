import Button from "@/components/Button";
import Heading from "@/components/Heading";
import TextInput from "@/components/TextInput";
import {z} from "zod";
import {getFromDatabase, pathToDocument, setToDatabase} from "@/firebase/admin/database";
import {initAdmin} from "@/firebase/admin/firebaseAdmin";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import RoomModel from "@/firebase/database/models/Room";
import {colors} from "@/util/players";

export default function Home() {
    async function joinRoom(formData: FormData) {
        "use server";
        await initAdmin();

        if (!formData.get("room_code")) return;
        const roomCode = z.string().parse(formData.get("room_code") as string);

        consoleDebugLog("FgYellow,Bold", `Joining room ${roomCode}...`, "");

        const room = await getFromDatabase<RoomModel>(pathToDocument("room", roomCode), RoomModel);

        console.log(room ? room : "NOT DEFINED FUCKING FIREBASE");

        redirect("/room/" + roomCode);
    }

    async function createRoom() {
        "use server";
        await initAdmin();

        consoleDebugLog("FgYellow,Bold", "Creating new room...");

        let roomCode = "";
        while (true) {
            roomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
            consoleDebugLog("FgGray", "Intent to create room: " + roomCode)

            // Check if room already exists
            const alreadyExistingRoom = await getFromDatabase<RoomModel>(pathToDocument("room", roomCode), RoomModel)

            if (!alreadyExistingRoom) {
                break;
            }
        }

        consoleDebugLog("FgGray", "Creating room: " + roomCode)

        // Create room
        await setToDatabase(pathToDocument("room", roomCode), {
            players: {
                [cookies().get("username")?.value || ""]: 0
            }
        });

        consoleDebugLog("FgGreen", `Created room ${roomCode}`);

        redirect("/room/" + roomCode);
    }

    return (
        <div className={"flex flex-col gap-4 items-center justify-center w-screen h-screen"}>
            <Heading>Play!</Heading>
            <form action={joinRoom}  className={"flex flex-col gap-4 items-center justify-center"}>
                <TextInput label={"Room Code"} defaultValue={"5060L"} placeholder={"1234A"} name={"room_code"}/>
                <Button>Join room!</Button>
            </form>
            <p>or</p>
            <form action={createRoom}>
                <Button style={3}>Create room</Button>
            </form>
        </div>
    )
}
