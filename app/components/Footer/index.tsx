type Props = {
    className?: string;
}

export default function Footer (props: Props) {
    return (
        <footer className={`border-t w-full py-8 h-20 text-center bg-amber-50 ${props.className}`}>
            <div className="h-full flex flex-col justify-center">
                <div>Written, designed, and implemented by Siqi Yao.</div>
            </div>
        </footer>
    )
}