interface ButtonProps {
    name: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style: string;
}

const Button: React.FC<ButtonProps> = ({name, onClick, style}) => {
    return(
        <button className={style} onClick={onClick}>{name}</button>
    )
}

export default Button;