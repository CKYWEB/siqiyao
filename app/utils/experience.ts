import expData from "@/app/data/experiences.json";

export type Experience = {
    tag: "working" | "education";
    id: string;
    institution: string;
    title: string;
    startDate: Date;
    stopDate?: Date;
    location: string;
    desc?: string;
    imagePath: string;
}

export const generateDate = (d: string) => {
    const yearIndex = Number(d.split("-")[0]);
    const monthIndex = Number(d.split("-")[1]) - 1;

    return new Date(yearIndex, monthIndex);
}

export const formatDate = (d: Date) => {
    return d.toLocaleString('en-us',{month:'short', year:'numeric'});
}

export const getExp = () => {
    return expData.exp
        .map((e) => ({
            ...e,
            imagePath: `/${e.id}_logo.png`,
            startDate: generateDate(e.startDate),
            stopDate: e.stopDate ? generateDate(e.stopDate) : undefined
        }))
        .sort((a, b) => {
            if (a.startDate > b.startDate) {
                return -1;
            } else if (a.startDate === b.startDate) {
                return 0
            } else {
                return 1;
            }
        }) as Experience[];
}