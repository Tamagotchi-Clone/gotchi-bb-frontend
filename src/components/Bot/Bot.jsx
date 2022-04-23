import React from 'react';
import { Launcher } from 'react-chat-window';
import io from 'socket.io-client';
import './bot.css';

class Bot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      socket: io('https://gatchi-bot.herokuapp.com', {
        transports: ['websocket'],
      }),
      room: 'user1',
    };
  }

  async componentDidMount() {
    this.state.socket.connect(true);
    this.state.socket.emit('join', this.state.room);
    this.state.socket.on('send-msg-response', async (msg) => {
      this.setState({
        messageList: [...this.state.messageList],
      });
      this._sendMessage(msg);
    });
  }
  async _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });

    this.state.socket.emit('new-msg', {
      msg: message.data.text,
      room: this.state.room,
    });
  }
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: 'them',
            type: 'text',
            data: { text },
          },
        ],
      });
    }
  }
  render() {
    return (
      <div id="chatbox" className="chatbox">
        <Launcher
          agentProfile={{
            teamName: 'gotchi bb',
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji={false}
        />
      </div>
    );
  }
}
export default Bot;
