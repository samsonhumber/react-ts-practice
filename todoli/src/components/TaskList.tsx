import { MouseEventHandler } from "react";
import Task from "./Task"

type AppPropsType = {
    listArr: String[];
    deleteHandler: MouseEventHandler;
}
 
export default function TaskList(props: AppPropsType) {
    return (<div>
        {props.listArr.map((value, index) => {
        return <Task key={index} text={value} deleteHandler={props.deleteHandler} index={index}/>
        })}
        </div>)
}