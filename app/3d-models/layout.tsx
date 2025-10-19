import Category from "../components/CategoryNav";
export default function ModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <Category />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
