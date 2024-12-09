import iconsSprite from '../assets/images/icons-sprite.svg'

export type IconPropsType = {
    iconId?: string,
    width?: number,
    height?: number,
    color?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={`${props.width || 24}px`}
             height={`${props.width || 24}px`}
             viewBox={'0 0 24 24'}
             fill={props.color || 'currentColor'}
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};