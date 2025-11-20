type HelloWorldProps = {
  label?: string
}

export default function HelloWorld({ label }: HelloWorldProps) {
  const themeInfo = {
    name: "Hello from the MRZen Next.js theme"
  }

  return (
    <div className="mz-hello-world">
      <h1>
        Hello World!
        {label ? <span style={{ marginLeft: "0.5rem" }}>{label}</span> : null}
      </h1>
      <pre>{JSON.stringify(themeInfo, null, 2)}</pre>
    </div>
  )
}
