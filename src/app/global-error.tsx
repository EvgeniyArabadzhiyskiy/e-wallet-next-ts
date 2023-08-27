'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h1 style={{ color: "white" }}>Global Error</h1>
        <h2 style={{ color: "white" }}>{error.message}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}