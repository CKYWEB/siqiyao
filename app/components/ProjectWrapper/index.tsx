import {ReactNode} from "react";
import Image from "next/image";

type Props = {
    title: string;
    desc?: string;
    demo?: string | ReactNode;
    children?: ReactNode;
}

export default function ProjectWrapper(props: Props) {
    return (
        <div className="mx-10 max-w-3xl text-lg">
            <section className="text-center">
                <h1 className="text-4xl mb-2 font-bold">{props.title}</h1>
                <div className="text-gray-400 mb-4">{props.desc}</div>
            </section>
            <div className="flex justify-center mb-4">
                {typeof props.demo === "string" ?
                    <Image width={360} height={0} alt="demo" src={props.demo} /> :
                    props.demo
                }
            </div>
            {props.children}
        </div>
    )
}