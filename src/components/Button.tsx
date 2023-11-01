type ButtonStyle = 1 | 2 | 3;

interface ButtonProps {
    children?: any;
    action?: (() => void) | string;
    style?: ButtonStyle;
}

export default function Button({style = 1, children, action}: ButtonProps) {
    const styles: Record<ButtonStyle, string> = {
        "1": "bg-primary text-light px-2 py-1",
        "2": "text-primary border-4 py-0.5 px-1",
        "3": "text-primary underline px-2 py-1",
    }

    const className = `button font-medium rounded border-primary focus:outline outline-offset-2 outline-2 outline-primary ${styles[style]}`;

    if (action == undefined || typeof action === "function") {
        return <button {...{className, children, onClick: action}} />
    } else {
        return <form action={action} className={"inline"}>
            <button {...{className, children}} />
        </form>
    }
}