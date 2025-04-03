import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header className="bg-gray-800">
        <div className="mx-auto max-w-6xl p-4">
          <h1 className="text-3xl font-bold">Product Manager</h1>
        </div>
      </header>
      
      <main className="mx-auto max-w-6xl p-4">
        <Outlet />
      </main>
    </>
  )
}
