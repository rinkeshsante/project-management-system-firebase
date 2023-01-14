type Props = {
  percentage: number;
};

export default function Progress({ percentage }: Props) {
  return (
    <div className="">
      <span>
        Progress: <b>{percentage}%</b> completed!
      </span>
      <div className="progress" role="progressbar">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
