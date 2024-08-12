import NavbarDashboard from "@/components/organisms/navbar_dashboard";
import { Suspense } from "react";

export default function Template({ children }) {
  return (
    <main>
      <NavbarDashboard />
      <div className="py-7 px-5 lg:px-10 2xl:px-16">
        <Suspense fallback={<div>Loading...</div>}>{children} </Suspense>
      </div>
    </main>
  );
}
