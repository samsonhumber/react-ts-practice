type AppPropsType = {
    handleChange: React.ChangeEventHandler
}

/*{placeholder={"Search by name..."}}*/
export default function InputTask(props: AppPropsType) {
    return <input onChange={props.handleChange} placeholder={"Search by name..."}/>
}