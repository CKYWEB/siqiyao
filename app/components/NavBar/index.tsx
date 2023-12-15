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

export default function NavBar () {
    return (
        <>
            <div className="flex justify-between md:hidden p-6 sticky top-0 bg-white border-b z-10">
                <div className="text-3xl font-bold">
                    Home
                </div>
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
            </div>
            <div className="hidden md:block w-40 mx-4 float-left sticky top-0">
                <div className="text-3xl font-bold p-4">
                    Home
                </div>
                {navs.map(nav => (
                    <Link
                        key={nav.href}
                        href={nav.href}
                        className="block hover:bg-gray-100 rounded-full p-4 text-lg"
                    >
                        {nav.label}
                    </Link>
                ))}
            </div>
        </>
    )
}