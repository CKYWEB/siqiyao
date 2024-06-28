import {GitHub, LinkedIn} from "@/app/components/Icons";

export default function NavBar () {
    return (
        <>
            <div className="flex justify-between p-6 pe-12 sticky top-0 bg-white border-b z-10">
                <div className="flex items-center space-x-6 text-2xl font-bold">
                    Siqi
                </div>
                <div className="flex items-center text-xl space-x-4">
                    <a
                      target="_blank"
                      href="https://github.com/CKYWEB"
                      rel="noreferrer"
                    >
                        <div className="cursor-pointer hover:opacity-75">
                            <GitHub className="w-8 h-8"/>
                        </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/CKYWEB"
                      rel="noreferrer"
                    >
                        <div className="cursor-pointer hover:opacity-75">
                            <LinkedIn className="w-8 h-8 text-blue-500"/>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}