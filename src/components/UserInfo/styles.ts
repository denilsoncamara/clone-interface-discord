import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: user-info;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;

  > strong {
    color: #fff;
    font-size: 13px;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(first-child) {
    margin-left: 5px;
  }

  > svg {
    width: 20px;
    height: 20px;
    color: #fff;
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  > svg:hover {
    opacity: 1;
  }
`;

export const MicIcon = styled(Mic)``;

export const HeadphoneIcon = styled(Headset)``;

export const SettingsIcon = styled(Settings)``;
