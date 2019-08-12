import styled from "styled-components"
import { Card as CardRebass } from "rebass"

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  padding: 15px;

  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`
export const Card = styled(CardRebass).attrs({
  bg: "white",
  boxShadow: 0,
  borderRadius: 8,
  padding: 2,
})`
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.03), 0 4px 20px -4px rgba(0, 0, 0, 0.1);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  cursor: ${props => (props.onClick ? "pointer" : "default")};

  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.03), 0 8px 26px -4px rgba(0, 0, 0, 0.1);
    transform: scale(1.05) translateY(-2.5%);
    transition: all 0.3s ease;
  }
`
export default Card
