import { useState } from 'react';
import ChatInput from './Components/ChatInput';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

function App() {
  return (
    <div className="h-screen flex overflow-hidden w-screen">
      <aside className='hidden sm:block'>
<Sidebar />
      </aside>
      <div className="flex flex-col md:w-[77%] w-full">
          <Header/>
          <ChatInput />
      </div>
    </div>
  );
}

export default App;

