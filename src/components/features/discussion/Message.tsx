import UserAvatar from "../user/UserAvatar";
import { ITextComment } from "./model";

type Props = {
  message: ITextComment;
};

export default function Message({ message }: Props) {
  return (
    <div>
      <div className="">
        <UserAvatar name={message.user} />
        <span className="">{message.timestamp.toLocaleString()}</span>
      </div>
      <span className="fs-5">{message.text}</span>
    </div>
  );
}
