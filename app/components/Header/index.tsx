import NavBar from "@/app/components/NavBar";

export default function Header () {
    return (
        <div className="flex justify-between p-6 ps-10">
            <div className="text-3xl font-bold">
                Home
            </div>
            <NavBar isSmall />
        </div>
    )
}