import Button from "react-bootstrap/Button";

export function ButtonComponent({title, onClick}) {
    return (
        <div className="container mt-5">
            <Button variant="secondary" size="lg" onClick={onClick}>{title}</Button>
        </div>
    )
}