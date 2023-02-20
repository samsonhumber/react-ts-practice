type AppPropsType = {
    handleChange: React.ChangeEventHandler;
    inputText: string | number | readonly string[] | undefined
}

/*{placeholder={"Search by name..."}}*/
export default function InputTask(props: AppPropsType) {
    return <input onChange={props.handleChange} value={props.inputText} placeholder={"New task..."}/>
}