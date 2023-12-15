import Link from "next/link";

const navs = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Projects",
        href: "/projects"
    }
]

type Props = {
    isSmall?: boolean;
}

export default function NavBar (props: Props) {
    if (props.isSmall) {
        return (
            <div className="md:hidden flex items-center space-x-6">
                {navs.map(nav => (
                    <Link
                        key={nav.href}
                        href={nav.href}
                        className="hover:underline hover:decoration-blue-400"
                    >
                        {nav.label}
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="hidden md:block w-40 ms-3">
            {navs.map(nav => (
                <Link
                    key={nav.href}
                    href={nav.href}
                    className="block hover:bg-gray-100 rounded-full text-center p-4 text-lg"
                >
                    {nav.label}
                </Link>
            ))}
        </div>
    );
}