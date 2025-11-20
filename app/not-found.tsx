export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <div>
        <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Page not found</h1>
        <p style={{ color: "#52525b" }}>The requested page could not be loaded.</p>
      </div>
    </div>
  )
}
