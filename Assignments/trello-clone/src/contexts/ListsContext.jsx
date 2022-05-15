import { createContext, useReducer } from "react";
import listsReducer from "../reducers/listsReducer";

export const ListsContext = createContext();

export default function ListsContextProvider(props) {
  const [lists, dispatchListsAction] = useReducer(listsReducer, []);

  return <ListsContext.Provider value={{ lists, dispatchListsAction }}>{props.children}</ListsContext.Provider>;
}
