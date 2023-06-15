export function NavBar(){
    return(
        <h1>This is NavBar</h1>
    )
}
//cách 1
export function Footer(props: {message: string}){
    console.log("aaaaaaaaaaaaaa", props.message);
    return(
        <h1>This is Footer {props.message}</h1>
    )
}
//cách 2
// export function Footer({message}: {message: string}){
//     return(
//         <h1>This is Footer {message}</h1>
//     )
// }