import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { larges } from "../Bienes";
import Link from "next/link";

const Index = () => (
  /* Firs Part */
  <div>
    <div className="card card-body bg-dark text-dark">
      <div className="row">
        <div className="col-md-5">
          <img src="opening.jpg" className="card-img-top img-fluid h-100" />
          <div className="card-img-overlay">
            <h1 className="card-title">My Company</h1>
          </div>
        </div>
        <div className="col-md-7 text-white bg-dark pl-4">
          <Layout footer = {false}>
            <div className="bg-dark">
              <div className="card-body">
                <p className="mt-5 h4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis assumenda labore beatae animi cupiditate
                  consequuntur, quasi, eius illum laudantium delectus optio qui
                  excepturi eligendi, ab itaque laborum obcaecati enim mollitia.
                </p>
              </div>
              <Link href="#!">
                <button type="button" className="btn btn-link m-2">
                  Know More
                </button>
              </Link>
            </div>
          </Layout>
        </div>
      </div>
    </div>

    {/* Examples */}
    <div className="card card-body pers">
      <div className="row py-4">
        {larges.map(({ img, name, description }, i) => (
          <Link href="/catalog" key={i}>
            <div className="col-md-6 py-2 example">
              <div className="card bg-dark text-white animate__animated animate__fadeIn h-100">
                <div className="row h-100">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img className="card-img-top img-fluid h-100" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
