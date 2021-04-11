import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { houses } from "../Bienes";

const Form = () => {
  const router = useRouter();
  const date = new Date();
  const el = houses.find((el) => el.id === router.query.id);

  let selected;
  let radioSelected;
  let hour = 9;

  const radioValues = ["Video Chat", "Presencial"];

  const regisAppointment = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        id: el.id,
        date: selected,
        type: radioSelected,
        hour: hour,
      }),
      headers: {
        ContentType: "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  const groupDays = (date, numberOfDays) => {
    let days = [];

    const useDate = (date) => {
      const str = date.toUTCString();

      const weekDay = str.split(",")[0],
        day = str.split(" ")[1],
        mounth = str.split(" ")[2],
        year = str.split(" ")[3],
        id = new Date(day + mounth + year).valueOf();

      return {
        weekDay,
        day,
        mounth,
        year,
        id,
      };
    };

    for (let day = 0; day < numberOfDays; day++) {
      days.push(useDate(new Date(date.valueOf() + day * 86.4 * 10 ** 6)));
    }
    return days;
  };

  const calendarClick = (e) => {
    let el = e.target;

    const apparence = () => {
      let obj = document.getElementById(`${selected}`);
      let props = ["bg-light", "bg-primary", "text-light"];
      props.forEach((prop) => {
        obj.firstChild.classList.toggle(prop);
      });
    };

    selected && apparence();

    while (true) {
      if (el.id) {
        break;
      }
      el = el.parentNode;
    }
    selected = el.id;
    apparence();
  };

  const changeRadio = (e) => {
    if (radioSelected) {
      radioValues.forEach((value) => {
        document
          .querySelector(`[value='${value}']`)
          .parentNode.classList.toggle("active");
      });
    } else {
      e.target.parentNode.classList.toggle("active");
    }
    radioSelected = e.target.value;
  };

  return (
    <Layout footer={false}>
      <div className="container p-2">
        <form onSubmit={regisAppointment}>
          {/* Tour Style */}
          <h4 className="p-3">
            <strong>Select a Tour Style</strong>
          </h4>
          <div className="btn-group-toggle row">
            {radioValues.map((el, i) => (
              <label key={i} className="form-label btn btn-outline-primary col">
                <input
                  className="form-check-input"
                  onChange={changeRadio}
                  type="radio"
                  name="options"
                  id={`option${i}`}
                  value={el}
                  required
                />
                {el}
              </label>
            ))}
          </div>

          {/* Week Day */}
          <h4 className="py-2">
            <strong>Select a Date</strong>
          </h4>
          <div className="row row-cols-md-4 row-cols-lg-5">
            {groupDays(date, 10).map(
              ({ day, mounth, weekDay, year, id }, i) => (
                <div key={i} id={id} className="btn-group-toggle text-center col my-2">
                  <label
                    onClick={calendarClick}
                    className="form-label btn card bg-light user-select-none"
                  >
                    <input className="form-check=input" type="radio" name="days" required />
                    <div>
                      <div className="card-header h5">
                        {mounth} {day}
                      </div>
                      <div className="card-body h3">{weekDay}</div>
                      <div className="card-footer h5">{year}</div>
                    </div>
                  </label>
                </div>
              )
            )}
          </div>

          {/* Hour select */}
          <div className="form-group row">
            <label className="col-12 col-lg-4">
              <select
                onChange={(e) => (hour = e.target.value)}
                className="form-control text-center"
                name="Hour"
                id="hour"
              >
                {[9, 10, 11, 1, 2, 3, 4, 5].map((hour, i) => (
                  <option key={i} value={hour}>{`${hour}:00 ${
                    hour > 5 ? "am" : "pm"
                  }`}</option>
                ))}
              </select>
            </label>
          </div>

          <button type="submit" className="btn btn-primary my-2 col-md-12">
            Request this time
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Form;
