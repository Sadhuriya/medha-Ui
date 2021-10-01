import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Input, Grid } from "@material-ui/core";
import AuthenticatedMenuBar from "../AuthenticatedMenuBar/AuthenticatedMenuBar";
import TitleMenuBar from "../../components/TitleMenuBar/TitleMenuBar";
import styled from "styled-components";

import SearchSection from "./searchSection";
import AdvancedPaginationTable from "./AdvancedPaginationTable";

import "./CandidateSearch.css";

let parsedJSONUserAuth;
let parsedJSONUserDetails;

const ShowHeader = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props.creditLeft]);
  const [balance, setBalance] = useState(props.creditLeft);
  return (
    <div className="credit-container">
      {props.creditLeft && (
        <div className="credit-text">Credits: {props.creditLeft}</div>
        // <div className="credits-left">{creditBalance}</div>
      )}
    </div>
  );
};

const CandidateSearch = () => {
  const [filterOptions, setFilterOptions] = useState("");
  const [creditBalance, setCreditBalance] = useState("");
  const [localBalance, setLocalBalance] = useState("");
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const userAuth = sessionStorage.getItem("userAuth");
  const userDetails = sessionStorage.getItem("userDetails");

  useEffect(() => {
    if (userAuth) {
      parsedJSONUserAuth = JSON.parse(userAuth);
      parsedJSONUserDetails = JSON.parse(userDetails);
      showCredit();
      //fetchUsers(currentPage, perPage, responseOptions);
    } else {
      history.push("/signIn");
    }
  }, [filterOptions]);

  const showCredit = () => {
    const apiURL = `https://onboarding.medha.hr/credits?userId=${JSON.stringify(
      parsedJSONUserDetails.id
    )}`;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + parsedJSONUserAuth.access_token,
        "Content-Type": "application/json",
      },
      // body: {
      //   userId: JSON.stringify(parsedJSONUserDetails.id),
      // },
    };

    fetch(apiURL, requestOptions).then(async (response) => {
      const data = await response.json();
      console.log("Creadit", data);

      setCreditBalance(data);
    });
  };
  const handleCallback = useCallback((data) => {
    setFilterOptions(data);
  }, []);
  const handleCreditCallback = useCallback(() => {
    showCredit();
  }, []);

  return (
    <div className="candidate-search">
      <AuthenticatedMenuBar menu="search" />
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <SearchSection filterOptions={handleCallback} />
        </Grid>
        <Grid item xs={10}>
          {creditBalance && (
            <div>
              <div className="header">
                <ShowHeader creditLeft={creditBalance} />
              </div>

              <AdvancedPaginationTable
                candidateFilter={filterOptions}
                reduceCredit={handleCreditCallback}
              />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CandidateSearch;
