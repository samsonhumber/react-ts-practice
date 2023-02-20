import InputTask from "./InputTask";
import AddTaskButton from "./AddTaskButton";

type AppPropsType = {
    handleChange: React.ChangeEventHandler;
    handleButtonPress: React.MouseEventHandler;
    inputText: string | number | readonly string[] | undefined;
}

export default function AddTaskForm(props: AppPropsType) {
    return <form>
        <InputTask handleChange={props.handleChange} inputText={props.inputText}/>
        <AddTaskButton handleButtonPress={props.handleButtonPress}/>
    </form>
}