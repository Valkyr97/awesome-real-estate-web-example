import Image from "next/image";
import Link from "next/link";
import { houses } from "../../Bienes";
import Layout from "../../components/Layout";

const House = ({ house }) => {
  return (
    <Layout dark>
      <div className="card bg-dark text-light py-2">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-5">
              <div className="card-block">
                <Image
                  className="card-img"
                  src={`/${house.img}`}
                  width={500}
                  height={500}
                  layout="responsive"
                />
                <Link href={`/form?id=${house.id}`} as={`${house.id}`}>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block my-2"
                  >
                    Book a guided tour
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-7 card-block">
              {house.int.map((int, i) => (
                <Image
                  key={i}
                  className="pb-2"
                  src={`/interiores/${int}`}
                  width={480}
                  height={400}
                  layout="responsive"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = houses.map((house) => ({
    params: { id: house.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const house = houses.find((el) => el.id === id);

  return {
    props: {
      house,
    },
  };
}

export default House;
