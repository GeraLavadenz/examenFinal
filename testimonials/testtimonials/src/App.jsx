import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { getCards } from "./lib/get-cards";

function App() {
  const[global, setGlobal]= useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCards(
          "https://670023414da5bd2375534f66.mockapi.io/api/v1/getList"
        );
        setCards(response);
        setGlobal(response)
      } catch (error) {
        console.log("No pudimos solicitar las tarjetas");
      }
    }
    fetchData();
  }, []);

  function remuvecard() {
    setCards((prevCards) => prevCards.slice(0, -1));
  }

  function addCard() {
    setCards({...Card, global[cards.length]
    });
  }

  return (
    <>
      <samp>{cards.length} tarjetas</samp>
      <button className="purple button" onClick={addCard} disabled={cards.length>=global.length} >
        agreagar tarjetas
      </button>
      <button className="purple button" onClick={remuvecard()} disabled={cards.length<=0}>
        remover tarjetas
      </button>

      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </>
  );
}

export default App;
