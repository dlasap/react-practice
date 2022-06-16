import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const d = formAnalyzer(formData)
    console.log("DDD", d);
    for (const data of formData.entries()) {
      console.log(data);
    }

    setData(d);
  };

  const formAnalyzer = (form_data)=>{
    let data = {}
    for (const [key, value] of form_data) {
      data[key]=value
    }
    return data
  }
  return (
    <div className="container">
      {JSON.stringify(data)}
      <form id="my-form" className="my-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="user-type"
            id="user-type-1"
            value="personal"
          />
          <label className="form-check-label" htmlFor="user-type-1">
            Personal
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="user-type"
            id="user-type-2"
            value="company"
          />
          <label className="form-check-label" htmlFor="user-type-2">
            Company
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="experience-level" className="form-label">
            Experience level
          </label>
          <select
            className="form-select mb-3"
            id="experience-level"
            name="experience-level"
          >
            <option value="1">Novice</option>
            <option value="2">Beginner</option>
            <option value="3">Mid-level</option>
            <option value="4">Advanced</option>
            <option value="5">Expert</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Password repeat:
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}