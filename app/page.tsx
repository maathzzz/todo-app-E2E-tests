import { AuthForm } from "@/components/auth-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <AuthForm />
      </main>
    </div>
  );
}