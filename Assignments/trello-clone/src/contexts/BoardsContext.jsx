import { createContext, useReducer } from "react";
import boardsReducer from "../reducers/boardsReducer";

export const BoardsContext = createContext();

export default function BoardsContextProvider(props) {
  const [boards, dispatchBoardsAction] = useReducer(boardsReducer, []);

  return <BoardsContext.Provider value={{ boards, dispatchBoardsAction }}>{props.children}</BoardsContext.Provider>;
}
