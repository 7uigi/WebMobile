export default function Header({ aumentarFonte, diminuirFonte }) {
  return (
    <header className="topbar">
      <div className="brand">
        <img src="/assets/logo.jpeg" alt="Logo" />
        <h1>Conecta <strong>60+</strong></h1>
      </div>
      <div className="accessibility">
        <p className="accessibility-label">Tamanho do texto</p>

        <button onClick={aumentarFonte} aria-label="Aumentar fonte"> + </button>

        <button onClick={diminuirFonte} aria-label="Diminuir fonte"> - </button>
      </div>
    </header>
  );
}
