import React, { useRef, useEffect } from 'react';

import Message, { Mention } from '../ChannelMessage';

import messages from '../../services/messages.json';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {messages.map(message => (
          <Message
            author={message.author}
            date={message.date}
            content={
              !message.hasMention ? (
                message.content
              ) : (
                <>
                  <Mention>{message.content.mention}</Mention>,{' '}
                  {message.content.message}
                </>
              )
            }
            isBot={message.isBot}
            hasMention={message.hasMention}
          />
        ))}
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />

        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
