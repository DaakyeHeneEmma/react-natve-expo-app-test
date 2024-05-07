import { Text } from "./Themed"

declare type TextProps ={
    name: string
    age:number
    course:string
    children?:React.ReactNode
}

const TestComponent = ( {name, age, course}:TextProps) => {

    return(
        <>
    <Text>Name: {name}</Text>
    <Text>Name: {age}</Text>
    <Text>Name: {course}</Text>
     </>
    )
}

export default TestComponent