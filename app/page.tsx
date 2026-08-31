import SiteNav from "./components/SiteNav";

export default function Catalogo() {
  return (
    <>
      <SiteNav current="/" />


<header>
  <div className="logo">forge<span>craft</span></div>
  <nav>
    <div className="search-box">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B90A3" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" placeholder="Buscar colecionáveis, action figures..." />
    </div>
    <a href="/pedidos" className="icon-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5F3FF" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    </a>
    <a href="/carrinho" className="icon-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5F3FF" strokeWidth="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <div className="badge">3</div>
    </a>
  </nav>
</header>

<main>
  <div className="page-title">Catálogo</div>
  <div className="page-subtitle">312 produtos impressos sob demanda</div>

  <div className="filters">
    <div className="filter-pill active">Todos</div>
    <div className="filter-pill">Action figures</div>
    <div className="filter-pill">Miniaturas RPG</div>
    <div className="filter-pill">Suportes gamer</div>
    <div className="filter-pill">Luminárias geek</div>
    <div className="filter-pill">Lançamentos</div>
  </div>

  <div className="grid">
    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Pronta entrega</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Action figure</div>
        <div className="card-name">Guerreiro élfico articulado 18cm</div>
        <div className="card-footer">
          <div className="card-price">R$ 89,90</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Sob encomenda</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Miniatura RPG</div>
        <div className="card-name">Dragão vermelho base hexagonal</div>
        <div className="card-footer">
          <div className="card-price">R$ 64,50</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Pronta entrega</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Suporte gamer</div>
        <div className="card-name">Suporte de controle duplo modular</div>
        <div className="card-footer">
          <div className="card-price">R$ 45,00</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Lançamento</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Luminária geek</div>
        <div className="card-name">Luminária holograma nave espacial</div>
        <div className="card-footer">
          <div className="card-price">R$ 129,90</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Pronta entrega</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Action figure</div>
        <div className="card-name">Robô mecha customizável</div>
        <div className="card-footer">
          <div className="card-price">R$ 112,00</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Sob encomenda</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Miniatura RPG</div>
        <div className="card-name">Grupo de goblins pintável (5un)</div>
        <div className="card-footer">
          <div className="card-price">R$ 58,00</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Pronta entrega</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Suporte gamer</div>
        <div className="card-name">Headset stand com RGB estático</div>
        <div className="card-footer">
          <div className="card-price">R$ 72,90</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>

    <a href="/produto" className="card">
      <div className="card-img">
        <div className="stock-tag">Lançamento</div>
        [imagem do produto]
      </div>
      <div className="card-body">
        <div className="card-cat">Action figure</div>
        <div className="card-name">Ninja articulado edição colecionador</div>
        <div className="card-footer">
          <div className="card-price">R$ 97,50</div>
          <button className="add-btn">+</button>
        </div>
      </div>
    </a>
  </div>
</main>



      <style>{`
* { box-sizing: border-box; margin: 0; padding: 0; }
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    border-bottom: 1px solid var(--border);
  }
  .logo {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.5px;
  }
  .logo span { color: var(--purple); }
  nav {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .search-box {
    display: flex;
    align-items: center;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px 14px;
    width: 320px;
    gap: 8px;
  }
  .search-box input {
    background: none;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    width: 100%;
  }
  .search-box input::placeholder { color: var(--text-secondary); }
  .icon-btn {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: var(--surface);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon-btn .badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: var(--purple);
    color: var(--bg);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    padding: 36px 40px 60px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .page-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .page-subtitle {
    color: var(--text-secondary);
    font-size: 14px;
    margin-bottom: 28px;
  }
  .filters {
    display: flex;
    gap: 10px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }
  .filter-pill {
    padding: 7px 16px;
    border-radius: 8px;
    border: 1px solid var(--border);
    font-size: 13px;
    color: var(--text-secondary);
    cursor: pointer;
  }
  .filter-pill.active {
    background: rgba(124, 92, 255, 0.12);
    border-color: var(--purple);
    color: var(--purple);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.15s ease;
    cursor: pointer;
  }
  .card:hover { border-color: var(--purple); }
  .card-img {
    height: 150px;
    background: linear-gradient(135deg, #23273A, #1A1D26);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3A3F52;
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
  }
  .stock-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 224, 184, 0.15);
    color: var(--mint);
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 6px;
  }
  .card-
  .card-cat {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
  }
  .card-name {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-price {
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
    font-weight: 500;
    color: var(--text-primary);
  }
  .add-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: var(--purple);
    color: var(--bg);
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
      `}</style>
    </>
  );
}
