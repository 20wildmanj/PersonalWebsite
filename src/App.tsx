import React from 'react';
import './App.css';
import { Avatar } from '@mui/material';
import { Paper } from '@mui/material';
// bg-gradient-to-b from-slate-100 to-slate-400
const App = () => (
    <div className="h-screen bg-gradient-to-b from-slate-500 to-slate-800">
      <h1 className="text-l font-bold underline">
        Hello world!
      </h1>
      <div className="text-md">
        Hello
      </div>
      <div className="flex flex-row justify-evenly">
          <div className="text-slate-100">
            <h1 className="text-3xl font-semibold">
              Joseph Wildman
            </h1>
          </div>
          <div className="rounded-xl p-5 bg-white hover:bg-slate-800 duration-500">
            <Avatar variant="square" sx={{ width: 300, height:300, borderRadius: 10, }} src="profile.jpg">
              Joey
            </Avatar>
          </div>
      </div>
    </div>
);

export default App;
