import "./Filterbar.css";

export default function Filterbar({ filters, removeFilter }) {
  return (
    <section className="filterbar">
      <ul className="filterbar__list">
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
      </ul>
      <button className="filterbar__clear" onClick={() => removeFilter()}>
        Clear
      </button>
    </section>
  );
}
