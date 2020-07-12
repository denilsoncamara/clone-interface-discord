import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }: UserProps) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="MEE6" isBot />
      <UserRow nickname="Denilson Câmara" />

      <Role>Offline - 18</Role>
      <UserRow nickname="MEE6" isBot />

      <Role>Disponível - 1</Role>
      <UserRow nickname="Denilson Câmara" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
      <UserRow nickname="Denilson Câmara" />
    </Container>
  );
};

export default UserList;
