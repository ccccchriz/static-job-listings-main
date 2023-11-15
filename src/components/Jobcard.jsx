import "./Jobcard.css";

export default function Jobcard({ data, addFilter }) {
  return (
    <section
      className={"jobcard" + (data.featured ? " jobcard--featured" : "")}
      key={data.id}
    >
      <img src={data.logo.slice(1)} alt="" />
      <div className="jobcard__title">
        <h2 className="jobcard__company">{data.company}</h2>
        {data.new && <p className="jobcard__new">NEW!</p>}
        {data.featured && <p className="jobcard__featured">FEATURED</p>}
      </div>
      <a className="jobcard__position" href="">
        {data.position}
      </a>
      <ul className="jobcard__infos">
        <li>{data.postedAt}</li>
        <li>{data.contract}</li>
        <li>{data.location}</li>
      </ul>
      <ul className="jobcard__tags">
        <li>
          <button onClick={() => addFilter(data.role)}>{data.role}</button>
        </li>
        <li>
          <button onClick={() => addFilter(data.level)}>{data.level}</button>
        </li>
        {data.languages.concat(data.tools).map((el, index) => (
          <li key={index}>
            <button onClick={() => addFilter(el)}>{el}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
