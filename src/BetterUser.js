import React from "react";
import ReactTable from "react-table";
// import "react-table/react-table.css";



const BetterUser = props => {
  const columns = [
    {
      width: 200,
      Header: "Time",
      accessor: "start"
    },
    {
      width: 300,
      Header: "Artist Name",
      Cell: ({ original }) => (
        <button value={original.name} onClick={props.handleClickGroup}>
          {original.name}
        </button>
      )
    }
  ];

  return (
    <ReactTable
      data={props.data}
      columns={columns}
      minRows={0}
      showPagination={false}
      //getTdProps={bands.events}
    />
  );
};

export default BetterUser;