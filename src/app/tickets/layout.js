import Nav from "./Nav";
import TenantName from "./TenantName";

export default function TicketsLayout({ children }) {
  return (
    <>
      <section style={{ borderBottom: "1px solid gray" }}>
        <TenantName tenantName="BridgeRock" />
        <Nav />
      </section>
      <section>{children}</section>
    </>
  );
}
