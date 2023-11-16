import "./Filterbar.css";

export default function Filterbar({ filters, removeFilter }) {
  if (filters.length == 0) {
    return <section className="filterbar filterbar--empty"></section>;
  }

  return (
    <section className="filterbar">
      <ul className="filterbar__list">
        {filters.map((filter) => (
          <li key={filter}>
            <span>{filter}</span>
            <button onClick={() => removeFilter(filter)}>
              <img src={"./images/icon-remove.svg"} alt="remove filter" />
            </button>
          </li>
        ))}
      </ul>
      <button className="filterbar__clear" onClick={() => removeFilter()}>
        Clear
      </button>
    </section>
  );
}
