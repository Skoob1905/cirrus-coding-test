import styled from "styled-components";
import { DeviceTimeProps } from "./DeviceTime.types";
import { Metadata, Subtitle, Title } from "../views/Meter";

/**
 * Render the Device Time
 * @param DeviceTimeProps Props to render the DeviceTime Component
 * @param DeviceTimeProps.time The time to render in the format HH:MM:SS
 * @param DeviceTimeProps.subtitle Subtitle of the widget
 * @returns The widget to render the device time
 */
export function DeviceTime({ time, subtitle }: DeviceTimeProps) {
  return (
    <Metadata>
      <TimeWrapper>{time}</TimeWrapper>
      <Title>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
    </Metadata>
  );
}

const TimeWrapper = styled.div`
  background-color: #b9d93b;
  width: fit-content;
  align-self: center;
  color: black;
  font-family: montserrat;
  font-size: 25px;
  border-top: 5px solid #8cb62b;
  margin-bottom: 20px;
  padding: 5px;
`;
