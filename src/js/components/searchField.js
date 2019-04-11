import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { SearchDropdownStyle } from "./styles";
import { Form, Autocomplete, SubmitBtn } from "react-formik-ui";
import { Box, Heading, Button, Flex, Text } from "rebass";

const SearchField = ({ onSubmit, suggustions, initialValue }) => (
  <Formik
    initialValues={{
      searchFiled: initialValue
    }}
    onSubmit={onSubmit}
    render={() => (
      <Form structured>
        <Flex>
          <SearchDropdownStyle>
            <Autocomplete
              label="Search"
              name="searchFiled"
              suggestions={suggustions}
            />
            <input type="submit" hidden />
          </SearchDropdownStyle>
          <Box px={4} py={20}>
            <Button> Search </Button>
          </Box>
        </Flex>
      </Form>
    )}
  />
);

export default SearchField;
