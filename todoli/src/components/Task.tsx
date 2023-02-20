type AppPropsType = {
    text: String
}

export default function Task(props: AppPropsType) {
    return <h2>{props.text}</h2>
}