import Header from "./Header";
import Footer from "./Footer";

export default function PageTemplate({
  children,
  className,
}) {
  return (
    <>
      <Header />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
}
