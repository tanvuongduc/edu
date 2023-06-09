import Devices from "./page";



export default function DevicesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
        
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        
        <h1>Hehehehehe</h1>
        <Devices></Devices>
        {children}
      </section>
    );
  }