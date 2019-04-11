import React from "react";

import { Box, Heading, Button, Flex, Text, Card } from "rebass";

const RaceItem = ({ race }) => (
  <Card width={200}>
    <Flex>
      <box>Race number</box>
      <box> {race.number}</box>
    </Flex>
    <Flex>
      <box>Race name</box>
      <box> {race.name}</box>
    </Flex>
    <box>Race start time</box>
    <box> {race.startTime}</box>
  </Card>
);

const RaceComponent = ({ raceData }) => {
  <Flex>
    {raceData.map(race => (
      <RaceItem race={race} />
    ))}
  </Flex>;
};

export default RaceComponent;
