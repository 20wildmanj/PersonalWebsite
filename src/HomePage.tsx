import  GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import { Avatar } from '@mui/material';
import { AppBar } from '@mui/material';
import React from 'react';

export const HomePage:React.FC<{}> = () => (
    <>
        <div className="flex flex-row justify-evenly">
            <div className="text-slate-800 flex flex-col justify-evenly items-left max-w-lg">
                <h1 className="text-5xl font-bold">
                    Joseph Wildman
                </h1>
                <h2 className="text-2xl">
                    Undergraduate Student at Carnegie Mellon University studying Electrical and Computer Engineering
                </h2>
            </div>
            <div className="rounded-xl p-3 bg-slate-400 hover:bg-slate-800 duration-500">
                <Avatar variant="square" sx={{ width: 300, height:300, borderRadius: 10, }} src="profile.jpg">
                    Joey
                </Avatar>
            </div>
        </div>
        <div className="flex flex-wrap column place-content-center m-10 text-slate-800">
            Hi, I'm Joey. I'm a sophomore at CMU, with a passion in hardware and software engineering. Please find my previous work and projects
            below.
        </div>
        <div className="flex flex-wrap row space-x-10 items-center justify-center m-10">
            <IconButton href="https://www.github.com/20wildmanj">
                <GitHubIcon color="primary" sx={{ fontSize:60 }} aria-label="github"/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/joseph--wildman">
                <LinkedInIcon color="primary" sx={{ fontSize:60 }} aria-label="linkedin"/>
            </IconButton>
        </div>
    </>
);