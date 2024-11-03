import { Metadata, Subtitle, Title, Value } from "views/Meter";
import { TextCardProps } from "./TextCard.types";

export function TextCard({ subtitle, text }: TextCardProps) {
  return (
    <Metadata>
      <Value>{text}</Value>
      <Title>
        <Subtitle>{subtitle}</Subtitle>
      </Title>
    </Metadata>
  );
}
