import { Nav } from "@/components/layout/Nav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="mx-auto max-w-[628px]">
        <Nav variant="translucent" />
      </div>
    </header>
  );
}