import { Container } from "./Container";

export default function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container className="mt-16 sm:mt-10">
      <header className="max-w-1xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        )}
      </header>
      <div className="mt-8 sm:mt-6">{children}</div>
    </Container>
  );
}
