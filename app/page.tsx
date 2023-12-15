import Image from "next/image";
import TimeLine from "@/app/components/TimeLine";

export default function Home() {
    return (
        <div className="border rounded">
            <div className="bg-amber-50 h-40 mb-20">
                <Image
                    priority
                    src="/profile.jpeg"
                    alt="profile picture"
                    width={120}
                    height={120}
                    className="rounded-full relative top-24 left-4"
                />
            </div>
            <div className="md:flex md:justify-around px-4 pb-4 space-y-4 md:space-y-0">
                <div className="space-y-2">
                    <div className="text-xl font-bold">Siqi Yao</div>
                    <div>
                        Master student in Software Engineering Systems
                    </div>
                    <div className="text-gray-500">
                        Northeastern University
                    </div>
                </div>
                <TimeLine />
            </div>
        </div>
    )
}
