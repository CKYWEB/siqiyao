import Image from "next/image";
import {getExp} from "@/app/utils/experience";
import styles from "./timeLine.module.css";

type Props = {
    className?: string;
}

export default function TimeLine (props: Props) {
    return (
        <ul className={`ps-4 ${styles.ul} ${props.className}`}>
            {getExp().map(e=> (
                <li key={e.id} className="pb-1">
                    <div className="text-gray-500 ps-4">
                        {new Date(e.startDate).toLocaleString('en-us',{month:'short', year:'numeric'})}
                    </div>
                    <div className={`flex items-center space-x-2 border-s-2 border-gray-300 ps-3 pt-2 ${styles.institution}`}>
                        <Image src={e.imagePath} alt="logo" width={30} height={30} />
                        <div>{e.institution}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}