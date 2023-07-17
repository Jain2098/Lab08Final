import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const navigate = useNavigate();

  const MyEmail = (events) => {
    setEmail(events.target.value);
  };

  const myName = (events) => {
    setName(events.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/success/${name}/${email}/Sign-Up`);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">SignUp Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              onChange={myName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={MyEmail}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
