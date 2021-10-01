import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Popper from "@material-ui/core/Popper";
import Menu from "@material-ui/core/MenuItem";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
//import ReactNative, {StyleSheet, Text, View, Alert} from 'react-native';
import Group592 from "../../components/Group592";
import Group614 from "../../components/Group614";
import axios from "axios";
import AuthenticatedMenuBar from "../AuthenticatedMenuBar/AuthenticatedMenuBar";
import AdvancedPaginationTable from "./AdvancedPaginationTable";
import TitleMenuBar from "../../components/TitleMenuBar/TitleMenuBar";
import styled from "styled-components";
import {
  PoppinsNormalGraniteGray14px,
  PoppinsNormalGraniteGray14px2,
  PoppinsMediumCaribbeanGreen18px2,
  PoppinsNormalWhite10px,
  PoppinsNormalCaribbeanGreen10px,
  PoppinsNormalStarDust14px,
  PoppinsMediumCaribbeanGreen14px,
  PoppinsBoldMineShaft18px,
  PoppinsNormalCaribbeanGreen14px,
} from "../../assets/css/styledMixins";
import "./CandidateSearch.css";
import { render } from "react-dom";
import { LaptopWindows } from "@material-ui/icons";

function CandidateSearch() {
  const [titleData, setTitleData] = useState("");
  const [industryData, setIndustryData] = useState("");
  const [specialityData, setSpecialityData] = useState("");
  const [cityData, setCityData] = useState("");
  const [stateData, setStateData] = useState("");
  const [countryData, setCountryData] = useState("");

  const mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler");
    setTitleData(document.getElementById("titleInput").value);
    setIndustryData(document.getElementById("industryInput").value);
    setSpecialityData(document.getElementById("specialityInput").value);
    setCityData(document.getElementById("cityInput").value);
    setStateData(document.getElementById("stateInput").value);
    setCountryData(document.getElementById("countryInput").value);
  };

  const TableView = (props) => {
    const responseOptions = {
      title: titleData,
      industry: industryData,
      speciality: specialityData,
      city: cityData,
      state: stateData,
      country: countryData,
    };

    // let data1 = this.state.tableData;
    // let count1 = this.state.numberOfResults;

    return (
      <div>
        {/* <AdvancedPaginationTable data2={data1} count2={count1} /> */}
        <AdvancedPaginationTable responseOptions={responseOptions} />
      </div>
    );
  };

  const responseOptions = {
    title: titleData,
    industry: industryData,
    speciality: specialityData,
    city: cityData,
    state: stateData,
    country: countryData,
  };

  return (
    <div className="container-center-horizontal">
      <div className="candidate-search screen">
        <AuthenticatedMenuBar menu="search" />
        {/* <TitleMenuBar /> */}
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
            //onChange={handleTitle}
          />
          <br />
          <br />
          <SearchInput
            className="search-input"
            type="text"
            placeholder="Sub Industry"
            id="industryInput"
            //onChange={handleIndustry}
          />
          <br />
          <br />
          <SearchInput
            className="search-input"
            type="text"
            placeholder="Speciality"
            id="specialityInput"
            // onChange={handleSpeciality}
          />
          <br />
          <br />
          <SearchInput
            className="search-input"
            type="text"
            placeholder="City"
            id="cityInput"
            //onChange={handleCity}
          />
          <br />
          <br />
          <SearchInput
            className="search-input"
            type="text"
            placeholder="State"
            id="stateInput"
            // onChange={handleState}
          />
          <br />
          <br />
          <SearchInput
            className="search-input"
            type="text"
            placeholder="Country"
            id="countryInput"
            //onChange={handleCountry}
          />
          <br />
          <br />
          <Search onClick={mySubmitHandler} className="poppins-bold-white-18px">
            Search
          </Search>
        </OverlapGroup1>



        <TableView data={} />

        {/* <TableContainer component={Paper}>{gettableview()}</TableContainer> */}
      </div>
    </div>
  );
}

// const Group645 = styled.div`
//   width: 100px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   padding: 19px 9px;
//   align-items: center;
//   min-height: 1146px;
//   background-color: var(--caribbean-green-2);
// `;

// const Group1 = styled.div`
//   margin-top: 13px;
//   margin-left: 0.72px;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   min-width: 43px;
// `;

// const OverlapGroup3 = styled.div`
//   width: 43px;
//   height: 35px;
//   position: relative;
// `;

// const Rectangle17 = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 48px;
//   top: 50px;
//   left: -10px;
//   background: linear-gradient(180deg, #23c89d 0%, #00b894 100%);
// `;

// const SearchSubmit = styled.button`
//   position: absolute;
//   top: 45px;
//   left: -10px;
//   letter-spacing: 0;
//   line-height: 18px;
//   white-space: nowrap;
//   color: white;
//   font-weight: 800;
//   background: transparent;
//   font-size: 20px;
//   padding: 10px 30px;
//   margin: 10px 0px;
//   cursor: pointer;
//   border: none;
// `;

// const Shape4 = styled.img`
//   position: absolute;
//   width: 17px;
//   height: 13px;
//   top: 1px;
//   left: 4px;
//   object-fit: cover;
// `;

// const Shape3 = styled.img`
//   position: absolute;
//   width: 19px;
//   height: 33px;
//   top: 0;
//   left: 0;
//   object-fit: cover;
// `;

// const Shape2 = styled.img`
//   position: absolute;
//   width: 13px;
//   height: 24px;
//   top: 5px;
//   left: 30px;
//   object-fit: cover;
// `;

// const Shape1 = styled.img`
//   position: absolute;
//   width: 22px;
//   height: 35px;
//   top: 0;
//   left: 20px;
//   object-fit: cover;
// `;

// const UserPictureWhite = styled.img`
//   width: 42px;
//   height: 42px;
//   margin-top: 58px;
//   margin-right: 2px;
//   object-fit: cover;
// `;

// const Profile = styled.div`
//   ${PoppinsNormalWhite10px}
//   min-height: 17px;
//   margin-top: 10px;
//   min-width: 32px;
//   letter-spacing: 0;
//   line-height: 10px;
//   white-space: nowrap;
// `;

// const OverlapGroup5 = styled.div`
//   width: 80px;
//   height: 211px;
//   position: relative;
//   align-self: flex-start;
//   margin-top: 76px;
// `;

// const Rectangle219 = styled.div`
//   position: absolute;
//   width: 80px;
//   height: 100px;
//   top: 111px;
//   left: 0;
//   background-color: var(--white);
//   border-radius: 10px;
// `;

// const Group644 = styled.div`
//   position: absolute;
//   width: 43px;
//   top: 0;
//   left: 19px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const Loupe = styled.img`
//   width: 36px;
//   height: 36px;
//   margin-left: 2px;
//   object-fit: cover;
// `;

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

const SearchInput = styled.input`
  border: 1px solid #e7e7e7;
  height: 42px;
  width: 230px;
  padding: 0 10px;
  font-size: 19px;
`;

// const BlackSettingsButton = styled.img`
//   width: 42px;
//   height: 42px;
//   margin-top: 68px;
//   object-fit: cover;
// `;

// const Settings = styled.div`
//   ${PoppinsNormalCaribbeanGreen10px}
//   min-height: 17px;
//   margin-top: 10px;
//   margin-left: 1px;
//   letter-spacing: 0;
//   line-height: 10px;
//   white-space: nowrap;
// `;

// const SignOut = styled.img`
//   width: 59px;
//   height: 59px;
//   margin-top: 456px;
//   margin-right: 3px;
//   object-fit: cover;
// `;

const OverlapGroup1 = styled.div`
  width: 316px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 38px 0;
  align-items: center;
  min-height: 1154px;
  background-color: var(--black-squeeze);
`;

// const CSearch = styled.div`
//   ${PoppinsBoldMineShaft18px}
//   min-height: 27px;
//   align-self: flex-start;
//   margin-left: 20px;
//   letter-spacing: 0;
//   line-height: 18px;
//   white-space: nowrap;
//   font-size: 25px;
// `;

// const OverlapGroup7 = styled.div`
//   width: 316px;
//   height: 347px;
//   position: relative;
//   margin-top: 38px;
// `;

// const OverlapGroup31 = styled.div`
//   position: absolute;
//   width: 316px;
//   height: 347px;
//   top: 0;
//   left: 0;
// `;

// const Line2 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 49px;
//   left: 20px;
//   object-fit: cover;
// `;

// const Line147 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 101px;
//   left: 20px;
//   object-fit: cover;
// `;

// const Line170 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 153px;
//   left: 20px;
//   object-fit: cover;
// `;

// const Line171 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 198px;
//   left: 20px;
//   object-fit: cover;
// `;

// const Line172 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 248px;
//   left: 20px;
//   object-fit: cover;
// `;

// const Line173 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 300px;
//   left: 20px;
//   object-fit: cover;
// `;

// const Rectangle248 = styled.div`
//   position: absolute;
//   width: 316px;
//   height: 50px;
//   top: 0;
//   left: 0;
//   background-color: var(--athens-gray);
// `;

// const Text19 = styled.div`
//   ${PoppinsNormalGraniteGray14px2}
//   position: absolute;
//   top: 25px;
//   left: 20px;
//   letter-spacing: 0;
//   line-height: 50px;
//   white-space: nowrap;
// `;

// const Polygon29 = styled.img`
//   position: absolute;
//   width: 18px;
//   height: 10px;
//   top: 322px;
//   left: 279px;
//   object-fit: cover;
// `;

// const OverlapGroup4 = styled.div`
//   width: 276px;
//   height: 222px;
//   position: relative;
//   margin-top: 4px;
//   margin-left: 1px;
// `;

// const Line175 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 48px;
//   left: 0;
//   object-fit: cover;
// `;

// const Line176 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 100px;
//   left: 0;
//   object-fit: cover;
// `;

// const Line177 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 145px;
//   left: 0;
//   object-fit: cover;
// `;

// const Line178 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 194px;
//   left: 0;
//   object-fit: cover;
// `;

// const Line174 = styled.img`
//   position: absolute;
//   width: 276px;
//   height: 1px;
//   top: 1px;
//   left: 0;
//   object-fit: cover;
// `;

// const Text20 = styled.div`
//   ${PoppinsNormalGraniteGray14px}
//   position: absolute;
//   top: 0;
//   left: 30px;
//   letter-spacing: 0;
//   line-height: 50px;
//   white-space: nowrap;
// `;

// const Line179 = styled.img`
//   width: 276px;
//   height: 1px;
//   margin-top: 24px;
//   margin-left: 1px;
//   object-fit: cover;
// `;

// const FlexCol = styled.div`
//   width: 1504px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   min-height: 642px;
// `;

// const OverlapGroup2 = styled.div`
//   height: 100px;
//   position: relative;
//   display: flex;
//   padding: 26px 20px;
//   align-items: center;
//   min-width: 1504px;
//   background-color: var(--white);
//   box-shadow: 0px 3px 6px #0bbd9729;
// `;

// const MyProfile = styled.div`
//   ${PoppinsMediumCaribbeanGreen18px2}
//   min-height: 27px;
//   margin-top: 3px;
//   min-width: 89px;
//   letter-spacing: 0;
//   line-height: 18px;
//   white-space: nowrap;
//   font-size: 20px;
// `;

// const FlexRow = styled.div`
//   height: 22px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 432px;
//   margin-top: 49px;
//   margin-left: 51.5px;
// `;

// const FirstName = styled.label`
//   ${PoppinsNormalCaribbeanGreen14px}
//   min-height: 22px;
//   min-width: 116px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
//   font-size: 20px;
// `;

// const LastName = styled.div`
//   ${PoppinsNormalCaribbeanGreen14px}
//   min-height: 22px;
//   margin-left: 240px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
//   font-size: 20px;
// `;

// const FlexRow1 = styled.div`
//   display: flex;
//   align-items: flex-start;
//   min-width: 632px;
//   margin-top: 16px;
//   margin-left: 51px;
// `;

// const Line180 = styled.img`
//   width: 276px;
//   height: 1px;
//   object-fit: cover;
// `;

// const Line181 = styled.img`
//   width: 276px;
//   height: 1px;
//   margin-left: 80px;
//   object-fit: cover;
// `;

// const FlexRow2 = styled.div`
//   height: 22px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 642px;
//   margin-top: 32px;
//   margin-left: 51.5px;
// `;

// const Email = styled.div`
//   ${PoppinsNormalCaribbeanGreen14px}
//   min-height: 22px;
//   min-width: 116px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
//   font-size: 20px;
// `;

// const Password = styled.div`
//   ${PoppinsNormalCaribbeanGreen14px}
//   min-height: 22px;
//   margin-left: 100px;
//   min-width: 50px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
//   font-size: 20px;
// `;

// const ChangePassword = styled.div`
//   ${PoppinsNormalCaribbeanGreen14px}
//   min-height: 22px;
//   margin-left: 200px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
//   font-size: 20px;
//   color: orange;
// `;

// const FlexRow3 = styled.div`
//   height: 22px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 416px;
//   margin-top: 32px;
//   margin-left: 51.5px;
// `;

// const PhoneNumber = styled.div`
//   ${PoppinsNormalStarDust14px}
//   min-height: 22px;
//   min-width: 106px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
// `;

// const JobTitle = styled.div`
//   ${PoppinsNormalStarDust14px}
//   min-height: 22px;
//   margin-left: 290px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
// `;

// const APIKey = styled.div`
//   ${PoppinsNormalStarDust14px}
//   min-height: 22px;
//   margin-top: 42px;
//   margin-left: 51px;
//   letter-spacing: 0;
//   line-height: 14px;
//   white-space: nowrap;
// `;

// const FlexRow4 = styled.div`
//   height: 29px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 205px;
//   margin-top: 7px;
//   margin-left: 51px;
// `;

// const Text24 = styled.div`
//   ${PoppinsMediumCaribbeanGreen14px}
//   min-height: 22px;
//   min-width: 176px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
// `;

// const Group550 = styled.div`
//   align-self: flex-end;
//   margin-left: 10px;
//   display: flex;
//   align-items: flex-start;
//   min-width: 19px;
// `;

// const OverlapGroup6 = styled.div`
//   width: 19px;
//   height: 21px;
//   position: relative;
// `;

// const Rectangle194 = styled.div`
//   position: absolute;
//   width: 14px;
//   height: 17px;
//   top: 0;
//   left: 0;
//   background-color: var(--star-dust);
//   border-radius: 4px;
// `;

// const Rectangle195 = styled.div`
//   position: absolute;
//   width: 17px;
//   height: 19px;
//   top: 2px;
//   left: 2px;
//   background-color: var(--star-dust);
//   border-radius: 4px;
//   border: 2px solid var(--white);
// `;

// const EmailPreferences = styled.div`
//   ${PoppinsNormalStarDust14px}
//   min-height: 22px;
//   margin-top: 25px;
//   margin-left: 51px;
//   letter-spacing: 0;
//   line-height: 14px;
//   white-space: nowrap;
// `;

// const FlexRow5 = styled.div`
//   display: flex;
//   align-items: flex-end;
//   min-width: 431px;
//   margin-top: 21px;
//   margin-left: 54px;
// `;

// const Rectangle196 = styled.div`
//   width: 28px;
//   height: 28px;
//   border-radius: 6px;
//   border: 1px solid #9fc2c1;
// `;

// const Text23 = styled.p`
//   min-height: 22px;
//   margin-left: 11px;
//   margin-bottom: 1px;
//   min-width: 392px;
//   font-family: var(--font-family-poppins);
//   color: #686868;
//   font-size: var(--font-size-xs);
//   letter-spacing: 0;
//   line-height: 14px;
//   white-space: nowrap;
// `;

// const OverlapGroup = styled.div`
//   width: 180px;
//   height: 40px;
//   position: relative;
//   margin-top: 31px;
//   margin-left: 51px;
// `;

// const SaveChanges3 = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 42px;
//   font-family: var(--font-family-poppins);
//   letter-spacing: 0;
//   line-height: 18px;
//   white-space: nowrap;
//   font-size: 20px;
//   color: red;
// `;

// const Rectangle102 = styled.div`
//   position: absolute;
//   width: 180px;
//   height: 40px;
//   top: 0;
//   left: 0;
//   background-color: var(--aqua-spring);
// `;

// const SaveChanges1 = styled.div`
//   position: absolute;
//   top: 10px;
//   left: 25px;
//   font-family: var(--font-family-poppins);
//   letter-spacing: 0;
//   line-height: 14px;
//   white-space: nowrap;
//   font-size: 16px;
// `;

// const Text25 = styled.div`
//   ${PoppinsMediumCaribbeanGreen14px}
//   margin-bottom: -8px;
//   min-height: 22px;
//   margin-top: 170px;
//   margin-left: 40px;
//   letter-spacing: 0;
//   line-height: 30px;
//   white-space: nowrap;
//   color: red;
//   font-size: 22px;
// `;

// const actions = [
//   { label: "prevPage", value: 10 },
//   { label: "nextPage", value: 50 },
// ];
// const Selectperpage = styled.span`
//   width: 140px;
//   height: 40px;
//   position: absolute;
//   top: 5px;
//   left: 2px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 16px;
//   white-space: nowrap;
//   border: 1px solid #f3f9f9;
//   background-color: var(--white);
// `;
// const Paginationtable = styled.div`
//   position: absolute;
//   width: 100px;
//   height: 30px;
//   background-color: var(--grey);
//   cursor: pointer;
// `;
// const Count = styled.div`
//   position: absolute;
//   width: 150px;
//   height: 50px;
//   top: 10px;
//   left: 800px;
//   border-radius: 10px;
//   border: 1px solid #08bb96;
//   background-color: var(--#f3f9f9);
// `;
// const PaginationtBOX = styled.div`
//   position: absolute;
//   width: 150px;
//   height: 50px;
//   top: 10px;
//   left: 1000px;
//   border-radius: 10px;
//   border: 1px solid #08bb96;
//   background-color: var(--#f3f9f9);
// `;

// const RepeatGrid5 = styled.div`
//   position: absolute;
//   height: 850px;
//   width: 1500px;
//   top: 100px;
//   background-color: var(--white);
// `;
// const OverlapGroup120 = styled.div`
//   position: absolute;
//   width: 1500px;
//   height: 950px;
//   top: -1px;
//   left: 580px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   min-height: 250px;
//   background-color: var(--white);
// `;
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
// const OpenSearch = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 70px;
//   top: 10px;
//   left: 10px;
//   border-radius: 10px;
//   border: 1px solid #08bb96;
//   background-color: var(--#f3f9f9);
// `;
// const Newest = styled.div`
//   width: 165px;
//   height: 40px;
//   position: absolute;
//   top: 4px;
//   left: 16px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 16px;
//   white-space: nowrap;
//   border: 1px solid #f3f9f9;
//   background-color: var(--white);
// `;
// const Title = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 70px;
//   top: 100px;
//   left: 10px;
//   border-radius: 10px;
//   border: 1px solid #08bb96;
//   background-color: var(--#f3f9f9);
// `;

// const Speciality = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 70px;
//   top: 190px;
//   left: 10px;
//   border-radius: 10px;
//   border: 1px solid #08bb96;
//   background-color: var(--#f3f9f9);
// `;
// const Level = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 70px;
//   top: 280px;
//   left: 10px;
//   border-radius: 10px;
//   border: 1px solid #08bb96;
//   background-color: var(--#f3f9f9);
// `;
// const NoResult = styled.div`
//   position: absolute;
//   width: 200px;
//   height: 60px;
//   top: 10px;
//   left: 20px;
//   font-size: 20px;
//   border-radius: 10px;
// `;
// const Rectangle691 = styled.div`
//   position: absolute;
//   width: 1320px;
//   height: 70px;
//   top: 5px;
//   left: -1px;
//   background-color: rgb(59 59 59 / 7%);
//   box-shadow: inset -10px 0 12px -2px rgb(59 59 59 / 7%);
// `;

export default CandidateSearch;
