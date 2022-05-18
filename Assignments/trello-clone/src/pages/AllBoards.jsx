import BoardForm from "../components/BoardForm";
import BoardsList from "../components/BoardsList"

const AllBoards = () => {
  return (
    <div className="all-boards">
      <h1 className="all-boards__name">Task Manager</h1>

      <BoardForm />

      <BoardsList />
    </div>
  );
};

export default AllBoards;
