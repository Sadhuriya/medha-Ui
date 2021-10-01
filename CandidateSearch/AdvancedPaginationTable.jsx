import React, { useEffect, useState, useMemo } from "react";
import Paper from "@material-ui/core/Paper";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import linkedInIcon from "./linkedIn.png";
import mailIcon from "./mail.png";
import phoneIcon from "./phone.png";
import Box from "@material-ui/core/Box";
let parsedJSONUserAuth;
let parsedJSONUserDetails;

const AdvancedPaginationTable = (props) => {
  // console.log(props);
  // let localBalance = props.creditLeft;

  const userAuth = sessionStorage.getItem("userAuth");
  const userDetails = sessionStorage.getItem("userDetails");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [contact, setContact] = useState([]);
  const history = useHistory();

  // const responseOptions = {
  //   city: "",
  //   state: "",
  //   country: "",
  //   title: "",
  //   industry: "",
  //   speciality: "",
  // };
  useEffect(() => {
    if (userAuth) {
      parsedJSONUserAuth = JSON.parse(userAuth);
      parsedJSONUserDetails = JSON.parse(userDetails);
      //fetchUsers(currentPage, perPage, responseOptions);
    } else {
      history.push("/signIn");
    }

    if (props.candidateFilter) {
      fetchUsers(currentPage, perPage, props.candidateFilter);
    }
  }, [props.candidateFilter]);

  // Server level pagination
  const fetchUsers = async (page, size = perPage, filter) => {
    setLoading(true);
    var dataIndex = (page - 1) * size;
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
      console.log("data", data.results);
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

  const showContact = async (id) => {
    // const fetchContact = async (id) => {

    const apiURL = `https://search.medha.hr/candidates/${id}/contact`;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + parsedJSONUserAuth.access_token,
        "Content-Type": "application/json",
      },
    };

    fetch(apiURL, requestOptions).then(async (response) => {
      const data = await response.json();

      if (data.results) {
        var dataJson = data.results;
        console.log(dataJson);
        // console.log(dataJson[0].emails);
        let email, phone, linkedIn, contactInfo;

        if (dataJson[0].emails != undefined) {
          email = dataJson[0].emails[0].email;
          contactInfo = { email };
        } else {
          email = "";
          contactInfo = { email };
        }
        console.log(email, "email");

        if (dataJson[0].phones != undefined && dataJson[0].phones.length != 0) {
          phone = dataJson[0].phones;
          contactInfo = { email, phone };
        } else {
          phone = "";
          contactInfo = { email, phone };
        }
        console.log(phone, "phone");

        if (dataJson[0].linkedIn != "") {
          linkedIn = dataJson[0].linkedIn;
          contactInfo = { email, phone, linkedIn };
        } else {
          linkedIn = "";
          contactInfo = { email, phone, linkedIn };
        }
        console.log(linkedIn, "linkedIn");

        var viewButton = document.getElementById(`view-button${id}`);
        var viewText = document.getElementById(`view-text${id}`);

        viewButton.style.display = "none";

        let contactDiv = (email, phone, linkedIn) => {
          console.log("contactDiv", email, phone, linkedIn);
          if (email || phone || linkedIn) {
            console.log(email, "email");
            return ` 
            <div>       
            <a href={"mailto:"+${email}} target="_blank">
            <img src=${mailIcon} width="30" height="30" />
          </a>
          </div>
          <div>${phone}</div><br/>
          <a href = "${linkedIn}" target='_blank'>${linkedIn}</a>
          
          `;
          } else {
            <div> - </div>;
          }
        };

        viewText.innerHTML = contactDiv(
          contactInfo.email,
          contactInfo.phone,
          contactInfo.linkedIn
        );

        viewText.style.display = "block";

        props.reduceCredit();
      } else {
        setContact([]);
      }
    });
  };

  const columns = useMemo(
    () => [
      {
        name: "Candidate Name",
        selector: (row) => `${row.firstName} ${row.lastName}`,
        sortable: true,
      },

      {
        name: "Contact",
        //selector: "emails[0].email",
        sortable: true,
        cell: (row) =>
          row.emails != "****" ? (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "150px",
              }}
            >
              {row.emails ? (
                <Box>
                  <div>
                    <a href={`mailto:${row.emails[0].email}`} target="_blank">
                      <img src={mailIcon} width="30" height="30" />
                    </a>
                  </div>
                </Box>
              ) : null}
              {row.phones && row.phones.length ? (
                <Box>
                  <img src={phoneIcon} width="30" height="30" />
                  <div>{row.phones}</div>
                </Box>
              ) : null}
              {row.linkedIn ? (
                <Box>
                  <a href={"http://" + row.linkedIn} target="_blank">
                    <img src={linkedInIcon} width="30" height="30" />
                  </a>
                </Box>
              ) : null}
            </Box>
          ) : (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "150px",
              }}
            >
              <div id={`view-button${row._id}`}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    showContact(row._id);
                  }}
                >
                  View Contact
                </Button>
              </div>
              <Box id={`view-text${row._id}`}></Box>
            </Box>
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
        name: "Country",
        selector: "addresses[0].country",
        sortable: true,
      },

      {
        name: "Profile",
        selector: "email",
        sortable: true,
        cell: (row) => (
          <div id={`profile-button${row._id}`}>
            <Button
              variant="outlined"
              onClick={() => {
                history.push({
                  pathname: "/candidate-profile",
                  state: { rowId: row._id },
                });
              }}
            >
              View Profile
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const handlePageChange = async (page) => {
    console.log(page, "page");

    fetchUsers(page, perPage, props.candidateFilter);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    console.log(page, "page");
    fetchUsers(page, newPerPage, props.candidateFilter);
    setPerPage(newPerPage);
  };

  const tableTheme = {
    headRow: {
      style: {
        backgroundColor: "#1bc49b",
      },
    },

    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        fontSize: "25px",
        fontWeight: "500",
        textTransform: "uppercase",
        paddingLeft: "0 8px",
      },
    },
    cells: {
      style: {
        display: "flex",
        flexDirection: "row",
        fontSize: "17px",
        padding: "0 8px",
      },
    },
    pagination: {
      style: {
        // color: theme.text.secondary,
        fontSize: "18px",
        minHeight: "56px",

        // backgroundColor: theme.background.default,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        // borderTopColor: theme.divider.default,
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        //color: theme.button.default,
        //fill: theme.button.default,
        backgroundColor: "transparent",
        "&:disabled": {
          cursor: "unset",
          // color: theme.button.disabled,
          // fill: theme.button.disabled,
        },
        "&:hover:not(:disabled)": {
          // backgroundColor: theme.button.hover,
        },
        "&:focus": {
          outline: "none",
          // backgroundColor: theme.button.focus,
        },
      },
    },
  };

  return (
    <div>
      <div className="result-count poppins-bold-mine-shaft-18px">
        <h3> Showing {totalRows} search result </h3>
      </div>
      <div className="table-container credit-container">
        <Paper style={{ overflow: "auto", maxHeight: 970 }}>
          <DataTable
            // title={""}
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
            customStyles={tableTheme}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AdvancedPaginationTable;
