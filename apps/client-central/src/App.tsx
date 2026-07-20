import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Complete Frontend Dev and Deployment Lifecycle</h1>

        <Button onClick={() => alert(formatCurrency(12345))}>
          View Frontend Journey
        </Button>

        <p>
          A hands-on implementation of modern frontend development
          practices including React architecture, reusable component
          design, automated testing, CI/CD workflows, and production
          deployment.
        </p>
      </section>
    </main>
  );
}

export default App;
