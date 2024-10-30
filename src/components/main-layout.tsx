import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="  w-screen bg-muted  text-gray-800 h-screen overflow-auto">
      <section className="container mx-auto  h-full p-10 max-md:p-0 ">
        {children}
      </section>
    </div>
  );
}