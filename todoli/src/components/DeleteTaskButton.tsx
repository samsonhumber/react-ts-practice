import { MouseEventHandler } from "react"

type AppPropsType = {
    index: number;
    deleteHandler: MouseEventHandler;
}

export default function DeleteTaskButton(props: AppPropsType) {
    return <button id={String(props.index)} onClick={props.deleteHandler}>Remove Task</button>
}