import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export interface NavProps {
    highlighted: string,
}
export const Nav:React.FC<NavProps> = ({ highlighted }) => {
    const items = ['home', 'work', 'projects']

    return(
        <div className="flex flex-wrap justify-items-end justify-end font-sans text-slate-50 gap-10">
            {items.map((item) => (
                <div key={item}>
                    <Button 
                        color="inherit"
                        size='medium'
                        variant={item == highlighted ? 'outlined' : 'text'}
                    >{<NavLink to="/work"> item </NavLink>}</Button>
                </div>
            ))}
        </div>
    );
};