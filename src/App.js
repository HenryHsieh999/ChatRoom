import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='505e0146-c7b2-4038-a250-86b170a867c0'
      userName='Testuser'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;