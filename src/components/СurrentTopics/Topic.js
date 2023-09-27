//Компонент создает актуальную тему
function Topic(props) {
    return (
        <div className="topic">{props.children}</div>
    )
}

export default Topic;