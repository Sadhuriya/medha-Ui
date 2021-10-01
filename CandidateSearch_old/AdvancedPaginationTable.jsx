import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import { withRouter } from "react-router";
import { Button } from "bootstrap";
let creditBalance = [];

let cInfo = "";
let filterOptions = "";
let parsedJSONUserAuth;

function AdvancedPaginationTable(props) {
  const [data, setData] = useState([]);
  const [items, setItems] = useState(creditBalance);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  filterOptions = props.responseOptions;
  const userAuth = sessionStorage.getItem("userAuth");

  // Server level pagination
  const fetchUsers = async (page, size = perPage, filter = filterOptions) => {
    setLoading(true);
    var dataIndex = (page - 1) * size + 1;
    const apiURL = `https://search.medha.hr/filter?from=${dataIndex}&size=${size}`;
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + parsedJSONUserAuth.access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter),
    };

    fetch(apiURL, requestOptions).then(async (response) => {
      const data = await response.json();
      console.log("data", data);
      if (data.results) {
        var dataJson = data.results;
        setData(dataJson);
      } else {
        setData([]);
      }
      var dataJson = data.results;
      var datalen = data.numberOfResults;

      setTotalRows(datalen);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (userAuth) {
      parsedJSONUserAuth = JSON.parse(userAuth);
      fetchUsers(currentPage, perPage, filterOptions);
    } else {
      history.push("/signIn");
    }
  }, [currentPage, filterOptions]);

  const fetchData = (currentPage, perPage, filterOptions) => {
    fetchUsers(currentPage, perPage, filterOptions);
  };

  const reduceCredit = async (e, row) => {
    console.log(row);
    cInfo = "";

    if (row.emails != null) {
      if (row.emails[0] != null) {
        if (row.emails[0].email != null) {
          cInfo = row.emails[0].email;
        }
      }
    } else {
      cInfo = "sadhubala4@gmail.com";
    }
    // if (row.phones != null) {
    //   if (row.phones[0] != null) {
    //     if (row.phones[0].num != null) {
    //       cInfo = cInfo + "<br>\
    //       " + row.phones[0].num;
    //     }
    //   }
    // }

    e.target.innerHTML = cInfo;
  };

  const columns = useMemo(
    () => [
      {
        name: "First Name",
        selector: "firstName",
        sortable: true,
      },
      {
        name: "Last Name",
        selector: "lastName",
        sortable: true,
      },

      {
        name: "Email & Phone",
        selector: "email",
        sortable: true,
        cell: (row) => (
          <div onClick={(e) => reduceCredit(e, row)}>View Contact</div>
        ),
      },
      {
        name: "Company",
        selector: "employments[0].company",
        sortable: true,
      },
      {
        name: "Location",
        selector: "location",
        sortable: true,
      },
      {
        name: "Title",
        selector: "location",
        sortable: true,
      },
      {
        name: "Industry",
        selector: "industry",
        sortable: true,
      },
    ],
    []
  );

  const handlePageChange = (page) => {
    fetchData(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchData(page, newPerPage);
    setPerPage(newPerPage);
  };

  const tableTheme = {
    rows: {
      fontSize: "5px",
    },
  };

  return (
    <div>
      {/* <h1>Credits {items}</h1> */}
      <div className="credit-align"></div>
      <div className="header">
        <div className="result-count poppins-bold-mine-shaft-18px">
          <h3> Showing {totalRows} search result </h3>
        </div>
        <div className="credit-container poppins-bold-mine-shaft-18px">
          <b>Credits</b> <br />
          <div className="credits-left">
            <b>143</b>
          </div>
        </div>
      </div>

      <DataTable
        //title="Users"
        className="dataTables_wrapper"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        customTheme={tableTheme}
      />
    </div>
  );
}

export default withRouter(AdvancedPaginationTable);
