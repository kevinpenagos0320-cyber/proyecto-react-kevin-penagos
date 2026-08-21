import './CardsDashBoard.css';

export interface ModalCardsDashBoardProps {
    titulo: string;
    mensaje: string;
    numero: number;
}

export default function CardsDashBoard({
    titulo,
    mensaje,
    numero
}: ModalCardsDashBoardProps) {
    return (
        <div className="cards-dash-board">
            <div className="card-content">
                <h3>{titulo}</h3>
                <span className="card-number">{numero}</span>
                <p>{mensaje}</p>
            </div>
        </div>
    );
}

