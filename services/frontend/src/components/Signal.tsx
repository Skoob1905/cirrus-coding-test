import styled from "styled-components";
import { Metadata, Subtitle, Title, Value } from "views/Meter";
import { SignalProps } from "./Signal.types";

/**
 * Render the Signal component with the value of the signal and the icon
 * @param SignalProps Props to render the Signal Component
 * @param SignalProps.value The value of the signal
 * @returns The Signal Component widget
 */
export function Signal({ value }: SignalProps) {
  return (
    <Metadata>
      <IconWrapper>
        <Bar color="#34D399" style={{ height: "20%" }} />
        <Bar color="#34D399" style={{ height: "40%" }} />
        <Bar color="#34D399" style={{ height: "60%" }} />
        <Bar color="#9CA3AF" style={{ height: "80%" }} />
      </IconWrapper>
      <Value>{value}</Value>
      <Title>
        <Subtitle>Signal</Subtitle>
      </Title>
    </Metadata>
  );
}

// Wrapper for the icon
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
  margin: auto;
  align-items: flex-end;
  height: 60px;
`;

// Define each bar in the signal icon
const Bar = styled.div`
  width: 6px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
`;
