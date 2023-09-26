export default function UserLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        {/* <h1>Hehehehehe</h1> */}
   
        {children}
      </section>
    );
  }