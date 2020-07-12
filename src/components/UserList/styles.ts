import styled from 'styled-components';
import { RotateLeft } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: user-list;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  max-height: cal(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--gray);
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  padding: 5px;

  cursor: pointer;

  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  > strong {
    font-weight: 500;
    color: #fff;
    opacity: 0.7;

    margin-left: 13px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;

    border-radius: 4px;
    padding: 2px 5px;
    background-color: var(--discord);
    color: #fff;

    margin-left: 8px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }
`;
