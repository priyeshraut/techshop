import CareerForm from "./CareerForm";

const Career = () => {
  return (
    <section className="careerSection">
      <div className="career container">
        <h2 className="h2style">Careers</h2>
        <div className="careerCont">
          <p>Check out our job postings & opportunities waiting for you</p>
          <CareerForm />
        </div>
      </div>
    </section>
  );
};

export default Career;
