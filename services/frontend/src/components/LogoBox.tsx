import styled from "styled-components";
import { LogoBoxProps } from "./LogoBox.types";
import { Metadata, Subtitle, Title } from "../views/Meter";

/**
 * Render the widget to display the logo and the subtitle
 * @param LogoBoxProps Props to render the LogoBox Component
 * @param LogoBoxProps.base64Image The base64 image to render
 * @param LogoBoxProps.subtitle Subtitle of the widget
 * @returns Component to render the logo box
 */
export function LogoBox({ base64Image, subtitle }: LogoBoxProps) {
  // Create the base64 string
  const base64String = "data:image/svg+xml;base64," + base64Image;

  // Return the widget
  return (
    <Metadata>
      <ImageWrapper>
        <img src={base64String} width="130px" />
      </ImageWrapper>

      <Title>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
    </Metadata>
  );
}

const ImageWrapper = styled.div`
  height: 60%;
  align-content: end;
  padding-bottom: 20px;
`;
