type Props = {
    className?: string;
}

export default function Footer (props: Props) {
    return (
        <footer className={`w-full py-8 h-20 text-center border-t ${props.className}`}>
            <div className="h-full flex flex-col justify-center">
                <a
                  href="mailto:yao.siq@northeastern.edu"
                  className="hover:underline"
                >
                  yao.siq@northeastern.edu
                </a>
            </div>
        </footer>
    )
}