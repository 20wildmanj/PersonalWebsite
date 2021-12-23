import React from 'react';
import StandardImageList from './images';

export const Projects:React.FC<{}> = () => (
    <div className="flex flex-col items-center align-center">
        <h1 className="text-5xl font-bold p-10 text-slate-800"> 
            Projects
        </h1>
        <div className="flex place-content-center bg-slate-800/50 p-20 w-400px rounded-[100px]">
            <StandardImageList/>
        </div>
    </div>
);