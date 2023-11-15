import "./Jobcard.css";

export default function Jobcard({ data, addFilter }) {
  return (
    <section
      className={"jobcard" + (data.featured ? " jobcard--featured" : "")}
      key={data.id}
    >
      <img src={"./src/assets" + data.logo.slice(1)} alt="" />
      <div className="jobcard__title">
        <h2 className="jobcard__company">{data.company}</h2>
        {data.new && <p className="jobcard__new">NEW!</p>}
        {data.featured && <p className="jobcard__featured">FEATURED</p>}
      </div>
      <p className="jobcard__position">{data.position}</p>
      <ul className="jobcard__infos">
        <li>{data.postedAt}</li>
        <li>{data.contract}</li>
        <li>{data.location}</li>
      </ul>
      <ul className="jobcard__tags">
        <li onClick={() => addFilter(data.role)}>{data.role}</li>
        <li onClick={() => addFilter(data.level)}>{data.level}</li>
        {data.languages.concat(data.tools).map((el, index) => (
          <li key={index} onClick={() => addFilter(el)}>
            {el}
          </li>
        ))}
      </ul>
    </section>
  );
}
