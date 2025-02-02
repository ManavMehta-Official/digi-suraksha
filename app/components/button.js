export default function Button(props) {

    const variants = {
        default: 'bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 disabled:opacity-25',
        outline: 'border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-25',
        ghost: 'rounded-md bg-white hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-slate-950 disabled:opacity-25',
        fill: 'rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25'
    }
    const sizes = {
        base: 'text-base px-4 py-2',
        xs: 'text-xs px-2 py-1',
        sm: 'text-sm px-3 py-1.5',
        lg: 'text-lg px-4 py-2'
    }

    return (
        <button {...props} className={`${props.variant ? variants[props.variant] : variants['default']} ${props.size ? sizes[props.size] : sizes['base']}`}>
        </button>
    )
}