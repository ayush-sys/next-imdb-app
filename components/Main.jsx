import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";


export default function Main({ results }) {
  return (
    <FlipMove className="main-container">
        {results.map(result => (
            <Thumbnail key={result.id} result={result}/>
        ))}
    </FlipMove>
  )
}