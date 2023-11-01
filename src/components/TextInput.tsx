"use client";

import {useState} from "react";

interface TextInputProps {
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
}

export default function TextInput({ defaultValue = "", onChange, placeholder, label }: TextInputProps) {
    const [value, setValue] = useState<string>(defaultValue);

    return (
        <div className="relative">
            <input
                type="text"
                className={"border-4 border-primary rounded-full px-2 py-1 text-dark font-medium"}
                {...{placeholder, defaultValue}}
                onChange={(e) => {
                    onChange?.(e.target.value);
                    setValue(e.target.value);
                }}
            />
            <label className={"absolute -top-2 left-6 bg-primary rounded-lg px-2 text-light text-sm"}>{label}</label>
        </div>
    )
}