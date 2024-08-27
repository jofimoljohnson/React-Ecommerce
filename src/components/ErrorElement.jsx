import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error=useRouteError()
    console.log(error)
  return (
    <div className="text-4xl font-bold">
<h1>There was an error...</h1>


    </div>
  )
}

export default ErrorElement