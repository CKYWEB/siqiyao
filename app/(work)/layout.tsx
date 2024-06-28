"use client"

import {ReactNode} from "react";
import {ArrowLeft, ArrowRight} from "@/app/components/Icons";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {PROJECT_LIST_DATA} from "@/app/data";

export default function Layout(props: {children: ReactNode}) {
  const pathname = usePathname();
  const paths = PROJECT_LIST_DATA.map(i => i.href);
  const currentIndex = paths.indexOf(pathname);

  if (currentIndex === - 1) {
    return null;
  }

  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  return (
    <div className="my-4 mx-8 lg:mt-10">
      <div className="flex justify-between mb-3 text-base lg:text-lg">
        <Link href={previousIndex === -1 ? "/" : paths[previousIndex]}>
          <ArrowLeft className="md:w-10 md:h-10"/>
          <div className="text-zinc-700">Previous</div>
        </Link>
        {nextIndex <= paths.length - 1 &&
          <Link href={paths[nextIndex]}>
            <ArrowRight className="md:w-10 md:h-10"/>
            <div className="text-zinc-700">Next</div>
          </Link>
        }
      </div>
      {props.children}
    </div>
  )
}