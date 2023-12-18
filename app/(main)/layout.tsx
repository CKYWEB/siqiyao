import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            <div className="w-full flex justify-center">
                <div className="max-w-4xl">
                    {children}
                </div>
            </div>
            <Footer className="mt-10" />
        </>
    )
}