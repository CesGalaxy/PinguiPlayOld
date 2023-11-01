import Button from "@/components/Button";
import Heading from "@/components/Heading";
import TextInput from "@/components/TextInput";

export default function Home() {
    return (
        <form method={"POST"} action={"/room"} className={"flex flex-col gap-4 items-center justify-center w-screen h-screen"}>
            <Heading>Play!</Heading>
            <TextInput label={"Name"} placeholder={"Juan Cuesta"}/>
            <TextInput label={"Room Code"} placeholder={"1234A"}/>
            <Button>Join room!</Button>
            <p>or</p>
            <Button style={3} action={"/"}>Create room</Button>
        </form>
    )
}
