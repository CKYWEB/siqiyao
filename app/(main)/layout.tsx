import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <div className="flex max-w-6xl">
                <div className="w-full md:me-4">
                    {children}
                </div>
            </div>
            <Footer className="mt-10" />
        </>
    )
}