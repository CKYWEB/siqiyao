import {ArrowRight} from "@/app/components/Icons";

type ProjectHeaderType = {
  header: string;
  date: string;
}

const DATA: ProjectHeaderType[] = [
  {
    header: "📋 yaji",
    date: "2024 - PRESENT"
  },
  {
    header: "🎭 Role Rally",
    date: "JAN 2024"
  },
  {
    header: "📋 bna",
    date: "NOV 2022"
  },
  {
    header: "🍳 Good Eats",
    date: "SEP 2023"
  },
  {
    header: "👁️ QuickQuiz",
    date: "OCT 2019"
  }
]

export default function ProjectList() {
  return (
    <div>
      {DATA.map(i => (
        <div key={i.header}>
          <div className="border-t border-black py-4 cursor-pointer group flex items-center justify-between">
            <div className="text-xl md:text-2xl shrink-0 flex group-hover:underline underline-offset-8">
              {i.header}
            </div>
            <div className="flex items-center">
              <div className="text-xs md:text-lg">
                {i.date}
              </div>
              <ArrowRight className="md:w-10 md:h-10"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}