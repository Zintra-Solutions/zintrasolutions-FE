const ArrowRightSmallIcon = ({ className = "" }) => {
    return (
        <svg
            className={className}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 9H15M15 9L10 4M15 9L10 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default ArrowRightSmallIcon