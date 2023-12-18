import {ReactNode} from "react";
import Image from "next/image";

type Props = {
    title: string;
    desc: string;
    demo: string | ReactNode;
    children: ReactNode;
}

export default function ProjectWrapper(props: Props) {
    return (
        <div className="mt-20">
            <section className="text-center ">
                <h1 className="text-4xl mb-2">{props.title}</h1>
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