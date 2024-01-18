type Props = {
    text: string
    link: string
}

export default function Sign (props: Props) {
    return (
        <div className="text-3xl md:text-5xl hover:text-black ease-out duration-500">
            <a href={props.link}>
                {props.text}
            </a>
        </div>
)
}