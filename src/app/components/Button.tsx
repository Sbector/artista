export default function Button( {children, onClick} ) {
    return (
        <button onClick={onClick} className="bg-gray-200 text-gray-500 dark:bg-gray-200 dark:text-gray-500 dark:shadow-gray-500 hover:bg-gray-300 active:shadow-sm shadow-md transition-all rounded-md m-3 px-2">
            {children}
        </button>
    )
}