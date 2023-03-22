import React from "react";
import axios from "axios";
import useAsync from "../../hooks/useAsync";

import LoadingView from "../../components/LoadingView/LoadingView";
import MemberList from "../../components/Members/MemberList/MemberList";

async function getMembers() {
  const response = await axios.get("https://raw.githubusercontent.com/KMU-WINK/2023-01-react-js-study/feature/jiwon/src/pages/WinkMembers/static/memberData.json");
  return response.data;
}

export default function WinkMembers() {
  const [state, refetch] = useAsync(getMembers, []);
  const { loading, data, error } = state;
  let viewElement;

  if (data) {
    viewElement = <MemberList members={data}/>;
  }
  else {
    viewElement = <LoadingView error={error} reload={refetch}/>;
  }

  return (
    <div>
      <div style={{margin: "50px 0", textAlign: "center"}}>
        <p style={{margin: "10px 0", color: "#74c0fc", fontSize: "50pt", fontWeight: "bold"}}>NEW WAVE IN US</p>
        <p style={{margin: "10px 0", color: "#a5d8ff", fontSize: "20pt", fontWeight: "bold"}}>Introduction of WINK team members</p>
      </div>
      {viewElement}
    </div>
  );
}