function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="nav-logo" src="./react.png" alt="React logo" />

        <ul className="nav-items">
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer className="footer">&copy; 2022 Jannatin Naim. All rights reserved.</footer>;
}

function Main() {
  return (
    <main className="main">
      <h1 className="title">Why I'm Learning React</h1>
      <ol className="content-list">
        <li className="content-item">IDK, seems popular I guess...</li>
        <li className="content-item">I wanna get paid soon... maybe?</li>
        <li className="content-item">Don't have anything better to do... sort of.</li>
      </ol>
    </main>
  );
}

function Page() {
  return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<Page />, root);
