import type { CardItem } from "../types/types";
import "./cardsView.css"
import { useState } from "react";

interface CardsViewProps {
    cards: CardItem[];
}

export default function CardsView({ cards }: CardsViewProps) { 
    return (
        <div>
            <div className="cardsView">
                {cards.map((card, index) => {
                    return index < 3 ? <CardsView cards={[]} key={index} {...card} /> : null;
                })}
            </div>
        </div>
    );
}

function CardView({ title, description, image }: CardItem) {
    const [count, setCount] = useState<number>(0)
  return (
      <div className="card">
          <button onClick={() => setCount(count + 1)}>Click Me{ count }</button>
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <img src="/assets/game-info-frame-a.webp" alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
}