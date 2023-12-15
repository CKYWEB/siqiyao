import Image from "next/image";

type Props = {
    className?: string;
}

export default function Footer (props: Props) {
    return (
        <footer className={`border-t w-full py-8 h-32 text-center bg-amber-50 ${props.className}`}>
            <div>Written, designed, and implemented by Siqi Yao.</div>
            <div className="flex justify-center mt-2">
                <a
                    href="https://github.com/CKYWEB"
                    target="_blank"
                >
                    <Image
                        src="/github.svg"
                        alt="github"
                        width={30}
                        height={30}
                    />
                </a>
            </div>
        </footer>
    )
}