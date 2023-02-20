import Task from "./Task"

type AppPropsType = {
    listArr: String[]
}
 
export default function TaskList(props: AppPropsType) {
    return (<div>
        <Task text={props.listArr[0]}/>
        {props.listArr.map((value, index) => {
        return <Task key={index} text={value}/>
        })}
        </div>)
}