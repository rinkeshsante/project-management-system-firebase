import React from "react";

type Props = {
  name: string;
};

export default function UserAvatar({ name }: Props) {
  return <span className="badge text-bg-info">{name}</span>;
}
