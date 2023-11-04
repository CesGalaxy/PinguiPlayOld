import Button, {ButtonProps} from "@/components/Button";

interface ToolbarProps {
    buttons: ToolbarButton[];
}

interface ToolbarButton extends ButtonProps {
    menu?: ButtonProps[];
}

export default function ToolBar({ buttons }: ToolbarProps) {
    return (
        <div className={"flex flex-row items-center justify-between w-full bg-secondary text-light"}>
            {buttons.map((button, i) => <ToolBarButton key={i} {...button} />)}
        </div>
    )
}

function ToolBarButton({ menu, ...props }: ToolbarButton) {
    if (menu) {
        return <div className={"relative"}>
            <Button {...props} style={3} />
            <div className={"absolute top-0 left-0"}>
                <ToolBar buttons={menu} />
            </div>
        </div>
    } else {
        return <Button {...props} style={4} />
    }
}