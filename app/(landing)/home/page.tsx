import Sign from "@/app/components/Sign";

export default function Landing() {
    return (
        <div className="h-screen flex flex-col justify-center bg-gray-200">
            <div>
                <div className="flex justify-center px-8 py-12 space-y-4 md:text-center">
                    <div className="md:flex md:justify-center text-gray-400 space-y-8 md:space-x-8 md:space-y-0">
                        <Sign
                            text="GitHub"
                            link={"https://github.com/CKYWEB"}
                        />
                        <Sign
                            text="Projects"
                            link={"/projects"}
                        />
                        <Sign
                            text="LinkedIn"
                            link={"https://www.linkedin.com/in/siqi-yao-ck/"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
