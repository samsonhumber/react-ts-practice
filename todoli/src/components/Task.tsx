import { MouseEventHandler } from 'react';
import DeleteTaskButton from './DeleteTaskButton';

type AppPropsType = {
    text: String;
    index: number;
    deleteHandler: MouseEventHandler;
}

export default function Task(props: AppPropsType) {
    return <div>
        <h2>{props.text}</h2>
        <DeleteTaskButton index={props.index} deleteHandler={props.deleteHandler}/>
        </div>
}