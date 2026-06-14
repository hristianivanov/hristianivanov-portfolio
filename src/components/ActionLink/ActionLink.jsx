export default function ActionLink({ children, className = "", ...props }) {
    return (
        <a className={`action-link ${className}`.trim()} {...props}>
            {children}
        </a>
    );
}
