import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";

const SearchSection = ({ filterOptions }) => {
  // const [data, setData] = useState("");

  const mySubmitHandler = (event) => {
    let newData = {
      title: document.getElementById("industryInput").value,
      industry: document.getElementById("industryInput").value,
      speciality: document.getElementById("specialityInput").value,
      city: document.getElementById("cityInput").value,
      state: document.getElementById("stateInput").value,
      country: document.getElementById("countryInput").value,
    };

    // event.preventDefault();

    filterOptions(newData);
  };

  return (
    <OverlapGroup1>
      <div className="c-search poppins-bold-mine-shaft-18px">
        Candidate Search
      </div>
      <br />
      <br />
      <SearchInput
        className="search-input"
        type="text"
        placeholder="Title"
        id="titleInput"
      />
      <br />
      <br />
      <SearchInput
        className="search-input"
        type="text"
        placeholder="Sub Industry"
        id="industryInput"
      />
      <br />
      <br />
      <SearchInput
        className="search-input"
        type="text"
        placeholder="Speciality"
        id="specialityInput"
      />
      <br />
      <br />
      <SearchInput
        className="search-input"
        type="text"
        placeholder="City"
        id="cityInput"
      />
      <br />
      <br />
      <SearchInput
        className="search-input"
        type="text"
        placeholder="State"
        id="stateInput"
      />
      <br />
      <br />
      <SearchInput
        className="search-input"
        type="text"
        placeholder="Country"
        id="countryInput"
      />
      <br />
      <br />
      <Search
        onClick={() => mySubmitHandler()}
        className="poppins-bold-white-18px"
      >
        Search
      </Search>
    </OverlapGroup1>
  );
};

const OverlapGroup1 = styled.div`
  width: 308px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 38px 0;
  align-items: center;
  min-height: 1154px;
  background-color: var(--black-squeeze);
`;

const SearchInput = styled.input`
  border: 1px solid #e7e7e7;
  height: 42px;
  width: 230px;
  padding: 0 10px;
  font-size: 19px;
`;

const Search = styled.button`
  position: absolute;
  top: 590px;
  left: 27px;
  width: 200px;
  height: 60px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
  background-color: #10bf98;
  font-size: 20px;
  padding: 10px 30px;
  margin: 10px 0px;
  cursor: pointer;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 45px;
  left: -10px;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
  color: white;
  font-weight: 800;
  background: transparent;
  font-size: 20px;
  padding: 10px 30px;
  margin: 10px 0px;
  cursor: pointer;
  border: none;
`;

export default SearchSection;
