// Компонент создает список тем над поисковой строкой

import Subject from "./Subject";

function SubjectList(props) {
    return (
        <div className="subject-list">
            <Subject>
                <span>{props.subject1}</span>
            </Subject>
            <Subject>
                <span>{props.subject2}</span>
            </Subject>
            <Subject>
                <span>{props.subject3}</span>
            </Subject>
        </div>
    )
}

export default SubjectList;