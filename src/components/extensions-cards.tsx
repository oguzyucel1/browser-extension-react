export default function ExtensionCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="container">{children}</div>
    </section>
  );
}
