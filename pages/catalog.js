import Layout from "../components/Layout";
import { houses } from "../Bienes";
import Link from "next/link";

const Houses = () => {
  return (
    <Layout >
      <div className="row p-3">
        <div className="col-md-12">
          <div className="card bg-light card-body">
            <h1>Houses</h1>
            <div className="row">
              {houses.map(({ img, name, description }, i) => (
                <div key={i} className="col-md-3 py-2 animate__animated animate__fadeInUp">
                  <Link href={`/houses/${name}`}>
                    <div className="card  h-100 example">
                      <h5 className="card-title">{name}</h5>
                      <div className="overflow">
                        <img
                          src={img}
                          className="card-img-top img-fluid h-100"
                        />
                      </div>
                      <div className="card-body">
                        <p>{description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Houses;
