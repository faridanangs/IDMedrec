import NavbarDashboard from "@/components/organisms/navbar_dashboard"

export default function Template({children}) {
    return (
        <main>
            <NavbarDashboard />
            <div className="py-7 px-5 lg:px-10 2xl:px-16">
                {children}
            </div>
        </main>
    )
}
