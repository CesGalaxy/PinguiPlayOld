import React from "react";

interface HeadingProps {
    children?: any;
    level?: 1 | 2 | 3;
}

export default function Heading({level = 1, children}: HeadingProps) {
    const className = `heading text-${5 - level}xl font-bold mt-4 mb-2`;

    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

    return <Tag {...{className, children}} />
}