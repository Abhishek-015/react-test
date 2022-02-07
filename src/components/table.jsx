import React from "react";

const Table = ({ data ,searched,keyword }) => {
  return (
    <tbody>
      {data &&
        data.filter(searched(keyword)).map((el) => (
          <tr key={el.id}>
            <td>{el.gamename}</td>
            <td>{el.gametag}</td>
            <td>{el.gameauthor}</td>
            <td>{el.gameprice}</td>
            <td>{el.gamedesc}</td>
            <td>{el.forkids?"Yes":"No"}</td>
            <td>{el.gamerating}</td>
          </tr>
        ))}
    </tbody>
  );
};
export default Table;
