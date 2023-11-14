import "./Jobcard.css";

export default function Jobcard({ data }) {
  return (
    <section className="jobcard">
      <h2 className="company">{data.company}</h2>
    </section>
  );
}
