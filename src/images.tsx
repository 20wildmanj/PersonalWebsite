import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import styles from './images.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Card, CardActions, CardContent, Chip } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export interface image {
    img: string,
    title: string,
    date: string,
    description: string,
    chips: string[],
}
export interface ImageProps {
    images: image[],
}


export const Images:React.FC<ImageProps> = ({ images }) => {
    const [selected, setSelected] = React.useState(-1);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ImageList sx={{ width: matches ? 500 : 350, height: matches ? 500 : 400, overflow:'auto' }} cols={matches ? 2 : 1} gap={matches ? undefined : 354}>
        {images.map((item, index) => (
            <div
            onClick={() => setSelected(index)}
            >
            <div
            className={styles.flip}
            >
                <div className={selected == index ? styles.flipBack : styles.flipFront}>
                    <ImageListItem key={item.img}>
                    <img
                        src={matches ? `${item.img}?w=164&h=164&fit=crop&auto=format` : `${item.img}?w=350&h=350&fit=crop&auto=format`}
                        srcSet={matches ? `${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` : `${item.img}?w=350&h=350&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                </div>
                <div className={selected == index ? styles.flipFront : styles.flipBack}>
                    <Card sx={{width: matches ? '248px' : '350px', height: matches ? '248px' : '350px', overflow:'auto'}} raised={true} elevation={24}>
                        <CardContent>
                            <h2 className="text-2xl text-slate-800">
                                {item.title}
                            </h2>
                            <p>
                                {item.date}
                            </p>
                            <p className="text-slate-800 text-xs">
                                {item.description}
                            </p>
                        </CardContent>
                        <CardActions>
                            {item.chips.map((chip) => (<Chip label={chip} color="primary"/>))}
                        </CardActions>
                    </Card>
                </div>
            </div>
            </div>
        ))}
        </ImageList>
    );
}
