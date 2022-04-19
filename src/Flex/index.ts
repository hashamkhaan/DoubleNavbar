/* eslint-disable no-unexpected-multiline */
import styled from "@emotion/styled";

/**
 * The Flex component is a custom styled component to mainly set 'flex' CSS properties.
 *
 * @param align - sets 'align-items' CSS property (default: "stretch").
 * @param justify - sets 'justify-content' CSS property (default: "flex-start").
 * @param padding - sets 'padding' CSS property (default: "0px").
 * @param width - sets 'width' CSS property (default: "100%").
 */
const Flex = styled.div<{
  align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  padding?: string;
  width?: string;
}>`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  padding: ${({ padding }) => padding || "0px"};
  width: ${({ width }) => width || "100%"};
`;

export default Flex;
