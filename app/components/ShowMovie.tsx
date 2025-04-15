type ShowMoiveProps = {
    title: string,
    children : React.ReactNode
}
export default function ShowMovie({title, children} : ShowMoiveProps) {
    return (
        <>
        <p>{title}</p>
        </>
    );
}