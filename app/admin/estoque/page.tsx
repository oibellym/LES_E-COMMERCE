import SiteNav from "../../components/SiteNav";

export default function AdminEstoque() {
  return (
    <>

    <SiteNav current="/admin/estoque"/>

    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>

      <div className="sidebar">

        <div className="logo">forge<span>craft</span></div>
        <a href="/admin" className="nav-item">Clientes e pedidos</a>
        <a href="/admin/status" className="nav-item">Status de pedidos</a>
        <a href="/admin/produtos" className="nav-item">Produtos</a>
        <a href="/admin/estoque" className="nav-item active">Estoque</a>
        <a href="/admin/analise" className="nav-item">Análise de vendas</a>

      </div>

      <main>

        <h1>Entrada em estoque</h1>

        <div className="add-row">

          <select><option>Selecionar produto</option></select>
          <input type="text" placeholder="Quantidade" />
          <input type="text" placeholder="Valor de custo (R$)" />
          <input type="text" placeholder="Fornecedor" />
          <button>Registrar entrada</button>

        </div>

        <table>

          <thead>

            <tr><th>Produto</th><th>Qtd</th><th>Custo</th><th>Fornecedor</th><th>Data</th></tr>
            
          </thead>

          <tbody>

            <tr><td>Guerreiro élfico articulado 18cm</td><td>20</td><td className="price">R$ 32,00</td><td>3D Print Suprimentos</td><td>15 ago 2026</td></tr>
            <tr><td>Dragão vermelho base hexagonal</td><td>15</td><td className="price">R$ 28,50</td><td>Filamentos SP</td><td>12 ago 2026</td></tr>

          </tbody>

        </table>

      </main>

      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        .sidebar { width:200px; min-height:100vh; border-right:1px solid var(--border); padding:24px 16px; }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:16px; margin-bottom:24px; }
        .logo span { color:var(--purple); }
        .nav-item { display:block; padding:9px 10px; border-radius:8px; font-size:12px; color:var(--text-secondary); margin-bottom:2px; }
        .nav-item.active { color:var(--purple); }
        main { flex:1; padding:32px 40px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:20px; font-weight:700; margin-bottom:20px; }
        .add-row { display:flex; gap:10px; margin-bottom:20px; }
        .add-row input, .add-row select { background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:9px 12px; color:var(--text-primary); font-size:12px; }
        .add-row button { background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:9px 16px; font-size:12px; }
        table { width:100%; border-collapse:collapse; }
        th { text-align:left; font-size:11px; color:var(--text-secondary); padding:10px; border-bottom:1px solid var(--border); }
        td { padding:10px; font-size:12px; border-bottom:1px solid var(--border); }
        .price { font-family:'JetBrains Mono',monospace; }
      `}</style>

    </div>
    </>
  );
}
