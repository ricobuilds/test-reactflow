import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="w-full max-w-screen-xl mx-auto h-[66px] flex items-center justify-between p-8 px-4 xl:px-0">
      <div className="flex items-center">
        <span className="font-bold">SaaS Name</span>
        <p className="ml-4 text-sm">Launching soon on Product Hunt.</p>
      </div>
      <Button className="rounded-full">Get Started</Button>
    </header>
  )
}