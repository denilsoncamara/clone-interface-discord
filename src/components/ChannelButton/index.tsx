import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }: Props) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
