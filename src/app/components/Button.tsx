export default function Button( {
    children, 
    onClick
} : {
    children:React.ReactNode, 
    onClick?:any
}  ) {
    return (
        <button onClick={onClick} className="
        bg-gray-200
        text-gray-500
        shadow-gray-500 
        hover:bg-gray-300 active:shadow-sm shadow-md transition-all 
        rounded-md m-3 px-2">
            {children}
        </button>
    )
}