import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ToolBar from "@/components/ToolBar";

export default function RoomLayout({ children, params }: { children: React.ReactNode, params: { roomCode: string } }) {
    return (
        <div className={"w-full h-screen"}>
            <header className={"w-full flex flex-col items-center justify-"}>
                <nav className={"w-full flex flex-row items-center justify-between bg-primary text-light px-4"}>
                    <Heading>Room {params.roomCode}</Heading>
                </nav>
                <nav className={"w-full flex flex-row items-center justify-between bg-secondary text-light px-"}>
                    <ToolBar buttons={[
                        {
                            children: "Info"
                        },
                        {
                            children: "Leave!",
                            action: "/",
                        },
                    ]} />
                </nav>
            </header>
            {children}
        </div>
    )
}