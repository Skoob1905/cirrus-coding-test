import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Meter } from "./views/Meter";
import { ErrorBoundary } from "react-error-boundary";
import { Error404 } from "./views/Error404";

export function App() {
  return (
    <ErrorBoundary fallback={<Error404 />}>
      <Router>
        <Routes>
          <Route path="/meter/:id" element={<Meter />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
