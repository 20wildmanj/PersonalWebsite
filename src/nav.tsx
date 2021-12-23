import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export interface NavProps {
    highlighted: string,
    items: string[],
    changeHighlight: (item:string) => void,
}
export const Nav:React.FC<NavProps> = ({ highlighted, items, changeHighlight }) => {
    return(
        <div className="flex flex-wrap justify-items-end justify-end font-sans text-slate-800 gap-10">
            {items.map((item) => (
                <NavLink 
                    to={"/"+item} 
                    onClick={() => (changeHighlight(item))}
                > 
                    <div key={item}>
                        <Button 
                            color="inherit"
                            size='medium'
                            variant={item == highlighted ? 'outlined' : 'text'}
                            sx = {{width: 100,}}
                        >
                        { item }
                        </Button>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};