import styled from "styled-components";

export const SearchDropdownStyle = styled.div`
  .suggestions {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 190px;
    margin-top: 2px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  input {
    min-width: 190px;
    padding: 4px;
    height: 30px;
  }
`;
