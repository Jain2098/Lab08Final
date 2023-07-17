import { useParams } from "react-router-dom";

export default function Success() {
  const { id, name, type } = useParams();
  return (
    <>
      <p className="text-center">
        <b>{type} Successful</b>
      </p>
      <div className="container px-3">
        <p>
          {type === "Sign-Up" ? (
            <>
              <b>Name:</b> {name}
              <br />
            </>
          ) : (
            ""
          )}
          <b>Email:</b> {id}
        </p>
      </div>
    </>
  );
}
