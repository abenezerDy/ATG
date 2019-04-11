import React from "react";

import { Box, Heading, Button, Flex, Text } from "rebass";
import { observer, inject } from "mobx-react";

import ReactTable from "react-table";

class GameDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expandRow = this.expandRow.bind(this);
  }
  async componentWillMount() {
    const { match, store } = this.props;
    console.log(match, "match");
    const id = match.params.id;
    store.gameData.fetch(id);
    const raceData = store.gameData.data && store.gameData.data.races;
  }
  expandRow() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const { store } = this.props;
    const raceData = store.gameData.data && store.gameData.data.races;
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      { Header: "Number", accessor: "number" },
      {
        Header: "Date",
        accessor: "date" // String-based value accessors!
      },
      {
        Header: "Distance",
        accessor: "distance"
      }
    ];
    const startsColumn = [
      {
        Header: "Number:",
        accessor: "number"
      },
      {
        Header: "Horse Name",
        id: "horse",
        accessor: d => {
          return d.horse.name;
        }
      },
      {
        Header: "Driver/rider",
        id: "horse",
        accessor: d => {
          return d.driver.firstName + " " + d.driver.lastName;
        }
      }
    ];
    return (
      <ReactTable
        data={raceData || []}
        columns={[...columns]}
        className="-striped -highlight"
        SubComponent={row => {
          console.log(row);
          return (
            <ReactTable
              data={row.original.starts || []}
              columns={startsColumn}
              showPagination={false}
              pageSize={
                (row.original.starts && row.original.starts.length) || 1
              }
            />
          );
        }}
      />
    );
  }
}
export default inject("store")(observer(GameDetail));
