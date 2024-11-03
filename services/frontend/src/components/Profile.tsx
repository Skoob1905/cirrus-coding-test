import styled from "styled-components";
import { ProfileCardProps } from "./Profile.types";
import { SubValue, Value } from "views/Meter";

/**
 * Render the Profile Card
 * @param ProfileCardProps Props to render the Profile Component
 * @param ProfileCardProps.fullName The full name of the user
 * @param ProfileCardProps.avatar The avatar of the user
 * @param ProfileCardProps.address The address of the user
 * @param ProfileCardProps.events The number of events the user has
 * @param ProfileCardProps.hasSmartMeter Whether the user has a smart meter
 * @returns The Profile Card
 */
export function Profile({
  fullName,
  avatar,
  address,
  events,
  hasSmartMeter,
}: ProfileCardProps) {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="Profile" className="profile-image" />
      <div>
        <Header>{fullName}</Header>
        <Value>{address}</Value>
        <SubValue>{events} events</SubValue>
        {hasSmartMeter ? (
          <Button className="smart-meter-button">Smart Meter</Button>
        ) : null}
      </div>
    </ProfileCard>
  );
}

const Header = styled.h3`
  margin: 0.5rem 0;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #218838;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #1b702e;
  }
  width: fit-content;
  margin: 0.5rem 0 0 0;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 10px 20px;
  border-radius: 10px;
  flex-grow: 1;
`;
