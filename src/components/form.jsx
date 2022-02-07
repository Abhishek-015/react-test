import React from "react";

const Form = ({ handleChange, handleSubmit, text }) => {
  const {
    gamename,
    gameprice,
    gamerating,
    forkids,
    gameauthor,
    gametag,
    gamedesc,
  } = text;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input
            type="text"
            name="gamename"
            value={gamename}
            className="form-control"
            placeholder="Enter the name of game"
            onChange={handleChange}
            autoFocus
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label>Author</label>
          <input
            type="text"
            name="gameauthor"
            value={gameauthor}
            className="form-control"
            placeholder="author name"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Tag</label>
          <input
            type="text"
            name="gametag"
            value={gametag}
            className="form-control"
            placeholder="tag name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label>Price</label>
          <input
            type="Number"
            name="gameprice"
            value={gameprice}
            className="form-control"
            placeholder="Enter Price"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Rating</label>
          <select
            id="inputState"
            className="form-control"
            name="gamerating"
            value={gamerating}
            onChange={handleChange}
            required
          >
            <option defaultValue>select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            value={forkids}
            value={gamedesc}
            name="gamedesc"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
          <input name="forkids" type="checkbox" onChange={handleChange} />
        <label>For Kids</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};
export default Form;
