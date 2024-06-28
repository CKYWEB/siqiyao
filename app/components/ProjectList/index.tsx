import {ArrowRight} from "@/app/components/Icons";
import Link from "next/link";
import {PROJECT_LIST_DATA} from "@/app/data";

export default function ProjectList() {
  return (
    <div>
      {PROJECT_LIST_DATA.map(i => (
        <Link key={i.header}  href={i.href}>
          <div className="cursor-pointer">
            <div className="border-t border-black py-4 group flex items-center justify-between">
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
        </Link>
      ))}
    </div>
  )
}