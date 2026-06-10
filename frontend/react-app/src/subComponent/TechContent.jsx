import List from "./List";

function TechContent() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <List
          techname="System Design"
          content="Designing scalable and reliable systems that remain maintainable as applications grow."
        />
      </li>

      <li>
        <List
          techname="APIs & Microservices"
          content="Building modular services and well-structured APIs focused on performance and maintainability."
        />
      </li>

      <li>
        <List
          techname="Databases"
          content="Working with MongoDB and SQL databases, from schema design to query optimization."
        />
      </li>

      <li>
        <List
          techname="Real-Time Applications"
          content="Developing chat systems, live updates, and event-driven applications using WebSockets."
        />
      </li>

      <li>
        <List
          techname="Responsive UI"
          content="Creating interfaces that deliver a seamless experience across desktop, tablet, and mobile devices."
        />
      </li>

      <li>
        <List
          techname="UI/UX Animations"
          content="Implementing subtle, purposeful animations that enhance usability and user engagement."
        />
      </li>
    </ul>
  );
}

export default TechContent;