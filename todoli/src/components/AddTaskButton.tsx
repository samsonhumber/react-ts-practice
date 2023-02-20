import { MouseEventHandler } from "react";

type AppPropsType = {
    handleButtonPress: MouseEventHandler
}

export default function AddTaskButton(props: AppPropsType) {
    return <input type="submit" onClick={props.handleButtonPress}>{"Add Task"}</input>
}