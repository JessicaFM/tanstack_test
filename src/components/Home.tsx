import { Link } from "react-router-dom"

export default function Home() {
  return(
    <div className="container">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <Link to="/query" className="text-blue-600 hover:underline">React Query</Link>
        </div>
      </div>
    </div>
  )
}