import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../services/api";
import "./style.scss";

function CountryDetail() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCountry() {
      try {
        const country = await Api.getCountryByCode(countryCode);
        setCountry(country[0]);
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }
    getCountry();
  }, [countryCode, navigate]);

  const updateCountry = async () => {
    try {
      await Api.updateCountry({ ...country });
      navigate("/");
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  return (
    <div className="country-detail">
      {country && (
        <form>
          <label>
            <span>Country code:</span>
          </label>
          <input
            type="text"
            defaultValue={country.code}
            onChange={(e) => setCountry({ ...country, code: e.target.value })}
          />
          <label>
            <span>Country:</span>
          </label>
          <input
            type="text"
            defaultValue={country.name}
            onChange={(e) => setCountry({ ...country, name: e.target.value })}
          />
          <label>
            <span>Created at:</span>
          </label>
          <input
            type="text"
            defaultValue={new Date(country.createdAt).toLocaleString()}
            disabled
          ></input>
          <button onClick={() => updateCountry()}>Update</button>
        </form>
      )}
    </div>
  );
}

export default CountryDetail;
