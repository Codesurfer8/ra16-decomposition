// Компонент создает тему над поисковой строкой

function Subject(props) {
    return (
        <div className="subject">{props.children}</div>
    )
}

export default Subject;