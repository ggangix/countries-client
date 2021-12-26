import React, { useEffect, useState, useMemo, useCallback } from "react";
import Api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    if (countries.length === 0) return [];
    return countries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [countries, search]);

  const searchCountries = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const getAllCountries = async () => {
    try {
      const countries = await Api.getCountries();
      setCountries(countries);
    } catch (err) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  const handleDelete = async (countryCode) => {
    try {
      await Api.deleteCountry(countryCode);
      getAllCountries();
    } catch (err) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  const handleEdit = (countryCode) => {
    navigate(`/countries/${countryCode}`);
  };

  return (
    <div className="countries">
      <input
        type="text"
        onChange={searchCountries}
        placeholder="Search for a country"
        disabled={!countries}
      />
      {filteredCountries.length === 0 && (
        <p className="noCountries">No countries found</p>
      )}
      <div className="countriesData">
        {filteredCountries.map((country) => {
          return (
            <div className="countryItem" key={country.code}>
              <div>
                <h3>{country.code}</h3>
              </div>
              <div>
                <p>{country.name}</p>
              </div>
              <div className="controls">
                <button
                  className="edit"
                  onClick={() => handleEdit(country.code)}
                >
                  Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(country.code)}
                >
                  {" "}
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
