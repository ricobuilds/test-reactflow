import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Fragment, ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}