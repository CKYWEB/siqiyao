import React from "react";

type Props = {
    title?: string;
    children?: React.ReactNode;
}

export default function Section (props: Props) {
    return (
        <div className={`pb-4 ${props.title ? "" : "pt-4"} px-2 border-b border-gray-300`}>
            {props.title && (
                <h1 className="text-xl py-4 font-bold">
                    {props.title}
                </h1>
            )}
            {props.children}
        </div>
    )
}