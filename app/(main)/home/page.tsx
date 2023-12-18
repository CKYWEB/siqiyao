import Image from "next/image";
import TimeLine from "@/app/components/TimeLine";
import Section from "@/app/components/Section";
import ExperienceCard from "@/app/components/ExperienceCard";
import {getExp} from "@/app/utils/experience";

export default function Home() {
    return (
        <div className="mt-8 mx-4 md:mt-16">
            <div className="border">
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
                <div className="md:flex md:justify-between px-4 pb-4 space-y-4 md:space-y-0">
                    <div className="space-y-2">
                        <div className="text-xl font-bold">Siqi Yao</div>
                        <div>
                            Master student in Software Engineering Systems
                        </div>
                        <div className="text-gray-500">
                            Northeastern University
                        </div>
                    </div>
                    <div className="md:basis-2/3 md:flex md:justify-center">
                        <TimeLine />
                    </div>
                </div>
            </div>

            <Section title="About Me">
                <p>
                    I Always want to & am happy to solve, collaborate, and talking about Software Engineering problems:
                    how
                    they break, how they scale, and the people that maintain them.
                </p>
                <br/>
                <p>
                    Currently studying at Northeastern University as a first-year grad student.
                </p>
            </Section>

            <Section title="Working Experience">
                {getExp().filter(e => e.tag === "working").map(e => (
                    <ExperienceCard
                        key={e.id}
                        data={e}
                    />
                ))}
            </Section>

            <Section title="Education">
                {getExp().filter(e => e.tag === "education").map(e => (
                    <ExperienceCard
                        key={e.id}
                        data={e}
                        className="mb-4"
                    />
                ))}
            </Section>

            <Section title="Languages" className="border-b-0">
                <ul className="flex space-x-6 list-disc">
                    <li>English</li>
                    <li>Mandarin</li>
                </ul>
            </Section>
        </div>
    )
}
