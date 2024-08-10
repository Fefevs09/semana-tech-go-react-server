import { useParams } from "react-router-dom";
import { Message } from "./message";
import { use } from "react";
import { getRoomMessages } from "../http/get-room-messages";

export function Messages() {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error("Messages components must be used within room page");
  }

  const { messages } = use(getRoomMessages({ roomId }));

  console.log(messages);
  return (
    <ol className="list-decimal list-outside px-3 space-y-8">
      <Message
        text="O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?"
        amountOfReactions={10}
        answered
      />
      <Message
        text="O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?"
        amountOfReactions={10}
      />
      <Message
        text="O que é GoLang e quais são suas principais vantagens em comparação com outras linguagens de programação como Python, Java ou C++?"
        amountOfReactions={10}
      />
    </ol>
  );
}
