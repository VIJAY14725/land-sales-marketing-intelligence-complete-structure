import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dashboard() {
  return <main style={{padding:32}}>
    <h1>Land Sales & Marketing Intelligence</h1>
    <p>Application shell. Domain modules are organized under src/.</p>
  </main>;
}

export default function App() {
  return <BrowserRouter><Routes><Route path="*" element={<Dashboard/>}/></Routes></BrowserRouter>;
}
