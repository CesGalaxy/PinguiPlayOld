import type {Metadata} from 'next'
import {Inconsolata, Playpen_Sans} from 'next/font/google'
import './globals.css'
import {cookies} from "next/headers";
import Heading from "@/components/Heading";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import "@/debug"

const playpen_sans = Playpen_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'PinguiPlay',
    description: 'Let\'s have fun! Made by CesGalaxy!',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    async function login(formData: FormData) {
        "use server";

        // Set username cookie if the user has entered a name
        if (formData.get("name")) {
            cookies().set("username", formData.get("name") as string);
        }
    }
    return (
        <html lang="en">
        <body className={"bg-light " + playpen_sans.className}>
        {
            cookies().get("username")?.value
                ? children
                : (
                    <form action={login} className={"flex flex-col gap-4 items-center justify-center w-screen h-screen"}>
                        <Heading>Play!</Heading>
                        <TextInput label={"Your Name"} placeholder={"Spongebob"} name={"name"}/>
                        <Button>Let's go!</Button>
                    </form>
                )
        }
        </body>
        </html>
    )
}
