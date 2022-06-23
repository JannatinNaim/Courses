function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react.png" width="100" alt="React logo" />
        </nav>
      </header>

      <h1>Why I'm Learning React</h1>
      <ol>
        <li>IDK, seems popular I guess...</li>
        <li>I wanna get paid soon... maybe?</li>
        <li>Don't have anything better to do... sort of.</li>
      </ol>

      <footer>&copy; 2022 Jannatin Naim. All rights reserved.</footer>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<Page />, root);
