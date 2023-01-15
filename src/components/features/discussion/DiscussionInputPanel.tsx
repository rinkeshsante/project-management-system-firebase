type Props = {};

export default function DiscussionInputPanel({}: Props) {
  return (
    <>
      <input type="text" className="form-control" />
      <div className="d-flex gap-2 pt-2">
        <input
          type="file"
          className="form-control"
          data-max-size="32154"
          accept="image/png, image/jpeg"
        />
        <button className="btn btn-primary">send</button>
      </div>
    </>
  );
}
