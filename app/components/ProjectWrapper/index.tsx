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
        <div className="max-w-3xl">
            <section className="text-center">
                <h1 className="text-3xl md:text-4xl mb-2 font-bold">{props.title}</h1>
                <div className="md:text-lg text-zinc-500 mb-4">{props.desc}</div>
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