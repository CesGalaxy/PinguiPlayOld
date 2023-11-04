type ButtonStyle = 1 | 2 | 3 | 4;

export interface ButtonProps {
    children?: any;
    action?: ((e: any) => void) | string;
    style?: ButtonStyle;
}

export default function Button({style = 1, children, action}: ButtonProps) {
    const styles: Record<ButtonStyle, string> = {
        "1": "bg-primary text-light px-2 py-1",
        "2": "text-primary border-4 py-0.5 px-1",
        "3": "text-primary underline px-2 py-1",
        "4": "text-light px-2 py-1",
    }

    const className = `button font-medium rounded border-primary focus:outline outline-offset-2 outline-2 outline-primary ${styles[style]}`;

    if (action == undefined || typeof action == "function") {
        return <button {...{className, children, onClick: action}} />
    } else {
        return <a href={action}>
            <button {...{className, children}} formAction={action} />
        </a>
    }
}