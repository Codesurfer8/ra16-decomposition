import Topic from "./Topic"

// Компонент создает блок из актуальных тем
function TopicList(props) {
    return (
        <div className="topic-list">
            <Topic>
                <h4>{props.topic1}</h4>
            </Topic>
            <Topic>
                <h4>{props.topic2}</h4>
            </Topic>
            <Topic>
                <h4>{props.topic3}</h4>
            </Topic>
        </div>
    )
}

export default TopicList;