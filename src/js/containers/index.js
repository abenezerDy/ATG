import React from "react";

import { Box, Heading, Button, Flex, Text } from "rebass";
import { observer, inject } from "mobx-react";
const uuidv1 = require("uuid/v1");
import api from "../../services/api";
import ReactTable from "react-table";
import SearchField from "../components/searchField";
import { gametypes } from "../constants/index";

class HomePage extends React.Component {
  render() {
    const { store } = this.props;

    const columns = [
      {
        Header: "Sart Time",
        accessor: "startTime" // String-based value accessors!
      },
      {
        Header: "Track",
        id: "track",
        accessor: d => {
          return d.tracks[0].name;
        }
      }
    ];

    return (
      <Box mx={400} width={789} py={30}>
        <Box px={30}>
          <SearchField
            suggustions={gametypes}
            onSubmit={searchTerm => {
              store.gameSchedule.fetch(searchTerm.searchFiled);
            }}
          />
        </Box>

        <Flex>
          <Box mx={2}>
            <Box padding={40} py={20} px={10} bg={"blue"}>
              <Text color="white" fontSize={26}>
                Results
              </Text>
            </Box>
            <ReactTable
              data={store.gameSchedule.results || []}
              columns={[
                ...columns,
                ...[{ Header: "Total To Win", accessor: "totalToWin" }]
              ]}
              className="-striped -highlight"
              getTdProps={(state, row, col, instance) => ({
                onClick: (event, cb) => {
                  this.props.history.push("game/" + row.original.id);

                  cb();
                }
              })}
            />
          </Box>
          <Box mx={2}>
            <Box padding={40} py={20} px={10} bg={"blue"}>
              <Text color="white" fontSize={26}>
                Upcoming games
              </Text>
            </Box>
            <ReactTable
              data={store.gameSchedule.upcoming || []}
              columns={[...columns]}
              className="-striped -highlight"
              getTdProps={(state, row, col, instance) => ({
                onClick: (event, cb) => {
                  this.props.history.push("game/" + row.original.id);
                }
              })}
            />
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default inject("store")(observer(HomePage));
