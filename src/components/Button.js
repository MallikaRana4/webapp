
export default function Button({text,className}){
    return(
        <div className="m-2">
            <button className={className}>
                {text}
            </button>
        </div>
    );
}