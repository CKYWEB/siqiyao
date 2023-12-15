import {Experience, formatDate} from "@/app/utils/experience";
import Image from "next/image";

type Props = {
    data: Experience;
    className?: string;
}

export default function ExperienceCard (props: Props) {
    const {data} = props

    return (
        <div className={`flex space-x-4 ${props.className}`}>
            <div className="flex-shrink-0">
                <Image src={data.imagePath} alt="logo" width={50} height={50}/>
            </div>
            <div>
                <div>{data.institution}</div>
                <div>{data.title}</div>
                <div className="text-gray-500">
                    {`${formatDate(data.startDate)} - ${data.stopDate ? formatDate(data.stopDate) : "Now"}`}
                </div>
                <div className="text-gray-500">{data.location}</div>
                {data.desc && <div className="mt-2 italic">{data.desc}</div>}
            </div>
        </div>
    )
}