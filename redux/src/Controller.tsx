import React from "react";
import { rootReducer, useAppDispatch } from "./store";

function Controller() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(rootReducer.actions.addCount());
  }

  const handleChangeHeader = () => {
    dispatch(rootReducer.actions.editInput(`new header at ${new Date().toString()}`));
  }

  return (
    <div>
      <button onClick={handleClick}>ADD!!</button>
      <button onClick={handleChangeHeader}>CHANGE HEADER</button>
    </div>
  )
}

export default Controller;