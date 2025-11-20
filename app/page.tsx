import HelloWorld from "@/components/HelloWorld"

export default function HomePage() {
  return (
    <section className="container">
      <HelloWorld label="(Next.js edition)" />
      <p style={{ marginTop: "1rem" }}>
        This theme now runs on Next.js using the App Router. Extend the layout,
        wire it up to your CMS/API, and keep the header/footer styles provided in
        <code style={{ marginLeft: "0.25rem" }}>assets/scss</code>.
      </p>
    </section>
  )
}
