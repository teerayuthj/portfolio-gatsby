import styled from "styled-components"

const Links = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: -5px;
  color: inherit;
  ${props =>
    props.selected &&
    `border-bottom:  2.5px solid ${props.theme.colors.primary} `};
  cursor: ${props => (props.onClick ? "pointer" : "default")};

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 0;
    bottom: -2.5px;
    background-color: ${props => props.theme.colors.primaryLight};
    height: 2.5px;
    -webkit-transition: opacity 0.83s cubic-bezier(0.17, 0.17, 0.05, 1),
      background-color 0.83s cubic-bezier(0.17, 0.17, 0.05, 1);
    transition: opacity 0.83s cubic-bezier(0.17, 0.17, 0.05, 1),
      background-color 0.83s cubic-bezier(0.17, 0.17, 0.05, 1);
  }

  &:active:after {
    background-color: ${props => props.theme.colors.primaryLight};
    width: 100%;
  }

  &:hover:after {
    background-color: ${props => props.theme.colors.DimGray};
    left: 0;
    right: auto;
    width: 100%;
  }
`

export default Links
