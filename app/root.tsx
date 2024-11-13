import { Meta, Scripts, Links, Outlet } from "@remix-run/react"
import "./tailwind.css"

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <Outlet />
        </main>

        <Scripts />
      </body>
    </html>
  )
}