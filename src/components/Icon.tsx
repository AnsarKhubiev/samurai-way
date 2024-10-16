import React from "react";
import sprite from '../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    fill?: string
    height?: number
    width?: number
    viewBox?: string
}

export const Icon = ({iconId, fill, width, viewBox, height}: IconPropsType) => {
    return (
        <svg
            fill={fill || 'none'}
            height={height || 20}
            width={width || 20}
            viewBox={viewBox || '0 0 20 20'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${sprite}#${iconId}`}/>
        </svg>
    );
};