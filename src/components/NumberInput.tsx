"use client";

import Button from "@/components/Button";
import {useState} from "react";

interface NumberInputProps {
    defaultValue?: number;
    onChange?: (value: number) => void;
}

export default function NumberInput({ defaultValue = 0, onChange }: NumberInputProps) {
    const [num, setNum] = useState<number>(defaultValue);

    const change = (newNum: number) => {
        onChange?.(newNum);
        setNum(newNum);
    }

    return (
        <div className={"bg-primary rounded w-fit"}>
            <Button action={() => change(num - 1)}>-</Button>
            <input
                type={"number"}
                value={num}
                onChange={(e) => change(e.target.valueAsNumber || 0)}
                className={"rounded outline-none w-16 text-center remove-arrow font-medium"} />
            <Button action={() => change(num + 1)}>+</Button>
        </div>
    );
}