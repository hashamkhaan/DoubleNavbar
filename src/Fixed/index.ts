/* eslint-disable no-unexpected-multiline */
import styled from "@emotion/styled";

/**
 * The Fixed component is a custom styled component to mainly adjust related 'fixed: position" CSS properties.
 *
 * @param background - sets 'background' CSS property (default: "transparent").
 * @param bottom - sets 'bottom' CSS property (default: undefined).
 * @param height - sets 'height' CSS property (default: "auto").
 * @param left - sets 'left' CSS property (default: undefined).
 * @param padding - sets 'padding' CSS property (default: "0px").
 * @param right - sets 'right' CSS property (default: undefined).
 * @param top - sets 'top' CSS property (default: undefined).
 * @param width - sets 'width' CSS property (default: "100%").
 */
const Fixed = styled.div<{
  background?: string;
  bottom?: string;
  height?: string;
  left?: string;
  padding?: string;
  right?: string;
  top?: string;
  width?: string;
}>`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ background }) => background || "transparent"};
  border-bottom: 2px solid #ccc;
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "0px"};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  width: ${({ width }) => width || "100%"};
`;

export default Fixed;
