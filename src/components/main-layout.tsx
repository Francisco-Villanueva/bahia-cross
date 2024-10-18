import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="  w-screen bg-primary h-screen">
      <section className="container mx-auto  h-full p-10 text-secondary">
        {children}
      </section>
    </div>
  );
}
