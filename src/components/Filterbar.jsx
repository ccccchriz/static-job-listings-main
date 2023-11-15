import "./Filterbar.css";

export default function Filterbar({ filters, removeFilter }) {
  return (
    <section className="filterbar">
      {filters.map((filter) => (
        <li key={filter}>
          <span>{filter}</span>
          <button>
            <img
              onClick={() => removeFilter(filter)}
              src="./src/assets/images/icon-remove.svg"
              alt="remove filter"
            />
          </button>
        </li>
      ))}
      <button onClick={() => removeFilter()}>Clear</button>
    </section>
  );
}
