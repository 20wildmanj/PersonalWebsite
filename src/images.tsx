import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './images.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export interface image {
    img: string,
    title: string,
}
export interface ImageProps {
    images: image[],
}


export const Images:React.FC<ImageProps> = ({ images }) => {
    const [selected, setSelected] = React.useState(-1);

    return (
        <ImageList sx={{ width: 500, height: 500 }} cols={2} rowHeight={180}>
        {images.map((item, index) => (
            <div
            onClick={() => setSelected(index)}
            >
            <div className={styles.flip}
            >
                <div className={selected == index ? styles.flipBack : styles.flipFront}>
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            </div>
            <div className={selected == index ? styles.flipFront : styles.flipBack}>
                Hello
            </div>
            </div>
            </div>
        ))}
        </ImageList>
    );
}
