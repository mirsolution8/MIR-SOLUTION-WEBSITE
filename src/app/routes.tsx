import { createBrowserRouter } from "react-router"
import Site, { type PageName } from "./App"

function page(name: PageName) {
  return function Page() {
    return <Site page={name} />
  }
}

export const router = createBrowserRouter([
  { path: "/", Component: page("home") },
  { path: "/tentang", Component: page("about") },
  { path: "/filosofi", Component: page("philosophy") },
  { path: "/visi-misi", Component: page("vision") },
  { path: "/layanan", Component: page("services") },
  { path: "/produk", Component: page("products") },
  { path: "/proses", Component: page("process") },
  { path: "/kontak", Component: page("contact") },
  { path: "*", Component: page("not-found") },
])
