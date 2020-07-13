import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 40px;

  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: #fff;
    font-size: 16px;
  }

  > span {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;

    border-radius: 4px;
    padding: 2px 5px;
    background-color: var(--discord);
    color: #fff;

    margin-left: 6px;
  }

  > time {
    font-size: 13px;
    color: var(--gray);

    margin-left: 6px;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: #fff;
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
