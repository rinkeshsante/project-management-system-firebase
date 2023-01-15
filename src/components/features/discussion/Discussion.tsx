import Message from "./Message";
import { ITextComment } from "./model";

import React from "react";
import DiscussionInputPanel from "./DiscussionInputPanel";

type Props = {
  messages?: ITextComment[];
};

export default function Discussion({}: Props) {
  const messages: ITextComment[] = [
    {
      text: "m1",
      timestamp: new Date(),
      user: "Rinkesh Sante",
    },
    {
      text: "m1",
      timestamp: new Date(),
      user: "Rinkesh Sante",
    },
  ];

  return (
    <div>
      <h2>Activities</h2>
      {messages.map((message, index) => {
        return <Message message={message} key={index} />;
      })}
      <DiscussionInputPanel />
    </div>
  );
}
