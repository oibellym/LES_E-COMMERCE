import SiteNav from "../components/SiteNav";

export default function AdminClientesPedidos() {
  return (
    <div>
      <SiteNav current="/admin" />

      <div className="sidebar">
        <div className="logo">forge<span>craft</span> <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>admin</span></div>
        <a href="/admin" className="nav-item active">Clientes e pedidos</a>
        <a href="/admin/status" className="nav-item">Status de pedidos</a>
        <a href="/admin/produtos" className="nav-item">Produtos</a>
        <a href="/admin/estoque" className="nav-item">Estoque</a>
        <a href="/admin/analise" className="nav-item">Análise de vendas</a>
      </div>
      <main>
        <h1>Clientes e pedidos</h1>
        <div className="tabs">
          <div className="tab active">Pedidos</div>
          <div className="tab">Clientes</div>
        </div>
        <div className="search-row"><input type="text" placeholder="Buscar por cliente, número do pedido..." /></div>
        <table>
          <thead>
            <tr><th>Pedido</th><th>Cliente</th><th>Data</th><th>Itens</th><th>Total</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td className="price">#PED-08231</td><td>Isabelly Souza</td><td>18 ago 2026</td><td>3</td><td className="price">R$ 313,92</td><td><span className="pill p-transito">em trânsito</span></td></tr>
            <tr><td className="price">#PED-08230</td><td>Carlos Menezes</td><td>18 ago 2026</td><td>1</td><td className="price">R$ 89,90</td><td><span className="pill p-processando">processando</span></td></tr>
            <tr><td className="price">#PED-08229</td><td>Fernanda Lima</td><td>17 ago 2026</td><td>2</td><td className="price">R$ 174,40</td><td><span className="pill p-entregue">entregue</span></td></tr>
            <tr><td className="price">#PED-08114</td><td>Isabelly Souza</td><td>02 ago 2026</td><td>1</td><td className="price">R$ 64,50</td><td><span className="pill p-entregue">entregue</span></td></tr>
            <tr><td className="price">#PED-08113</td><td>Bruno Alves</td><td>02 ago 2026</td><td>4</td><td className="price">R$ 402,10</td><td><span className="pill p-entregue">entregue</span></td></tr>
          </tbody>
        </table>
      </main>


            <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        .sidebar { width:220px; min-height:100vh; border-right:1px solid var(--border); padding:24px 16px; }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:18px; margin-bottom:28px; padding:0 8px; }
        .logo span { color:var(--purple); }
        .nav-item { display:block; padding:10px 12px; border-radius:8px; font-size:13px; color:var(--text-secondary); margin-bottom:2px; cursor:pointer; }
        .nav-item.active { background:rgba(124,92,255,0.1); color:var(--purple); }
        main { flex:1; padding:32px 40px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:700; margin-bottom:20px; }
        .tabs { display:flex; gap:6px; margin-bottom:20px; }
        .tab { padding:8px 16px; border-radius:8px; font-size:13px; cursor:pointer; color:var(--text-secondary); }
        .tab.active { background:var(--surface); color:var(--text-primary); border:1px solid var(--border); }
        .search-row { display:flex; gap:10px; margin-bottom:16px; }
        .search-row input { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:10px 14px; color:var(--text-primary); font-size:13px; }
        table { width:100%; border-collapse:collapse; background:var(--surface); border:1px solid var(--border); border-radius:12px; overflow:hidden; }
        th { text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-secondary); padding:12px 16px; border-bottom:1px solid var(--border); }
        td { padding:14px 16px; font-size:13px; border-bottom:1px solid var(--border); }
        tr:last-child td { border-bottom:none; }
        .pill { font-size:10px; padding:3px 9px; border-radius:6px; font-family:'JetBrains Mono',monospace; }
        .p-transito { background:rgba(124,92,255,0.15); color:var(--purple); }
        .p-entregue { background:rgba(0,224,184,0.12); color:var(--mint); }
        .p-processando { background:rgba(255,180,84,0.15); color:var(--amber); }
        .price { font-family:'JetBrains Mono',monospace; }
            `}</style>
    </div>
  );
}
