import { CustomButtonProps } from "utils/types";

export function CustomButton({ title, handleClick, btnType }:CustomButtonProps){
    return(
    <button onClick={handleClick} type={btnType ?? 'button'} className="button">
        {title}
    </button>)
}