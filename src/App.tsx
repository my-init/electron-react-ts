import React from 'react';
import logo from './logo.svg';
import { ipcRenderer, IpcMessageEvent } from 'electron';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={()=>{
          ipcRenderer.on('response', (event: IpcMessageEvent, payload: any) => {
            console.log('[ipcRenderer] get a msg: ', payload);
            new Notification('receive a msg from ipcMain', {
              body: payload
            });
          });
          ipcRenderer.send('greeting', 'hello~ electron');
        }}>click to send msg to ipcMain</button>
      </header>
    </div>
  );
}

export default App;
