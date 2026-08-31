import SiteNav from "../../components/SiteNav";

export default function AdminStatus() {
  return (
    <>
      <SiteNav current="/admin/status" />

<div className="sidebar">
  <div className="logo">forge<span>craft</span> <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>admin</span></div>
  <a href="/admin" className="nav-item">Clientes e pedidos</a>
  <a href="/admin/status" className="nav-item active">Status de pedidos</a>
  <a href="/admin/produtos" className="nav-item">Produtos</a>
  <a href="/admin/estoque" className="nav-item">Estoque</a>
  <a href="/admin/analise" className="nav-item">Análise de vendas</a>
</div>
<main>
  <h1>Fluxo de status dos pedidos</h1>
  <div className="subtitle">Avance o pedido para a próxima etapa da impressão/entrega</div>

  <div className="board">
    <div>
      <div className="col-head">Em aberto</div>
      <div className="col">
        <div className="order-card"><div className="oid">#PED-08232</div><div className="oname">Carlos Menezes</div><button className="advance-btn">Iniciar processamento →</button></div>
      </div>
    </div>
    <div>
      <div className="col-head">Processando</div>
      <div className="col">
        <div className="order-card"><div className="oid">#PED-08230</div><div className="oname">Carlos Menezes</div><button className="advance-btn">Confirmar pagamento →</button></div>
      </div>
    </div>
    <div>
      <div className="col-head">Pagamento ok</div>
      <div className="col">
        <div className="order-card"><div className="oid">#PED-08228</div><div className="oname">Marcos Vinícius</div><button className="advance-btn">Despachar →</button></div>
      </div>
    </div>
    <div>
      <div className="col-head">Em trânsito</div>
      <div className="col">
        <div className="order-card"><div className="oid">#PED-08231</div><div className="oname">Isabelly Souza</div><button className="advance-btn">Marcar entregue →</button></div>
      </div>
    </div>
    <div>
      <div className="col-head">Entregue</div>
      <div className="col">
        <div className="order-card"><div className="oid">#PED-08229</div><div className="oname">Fernanda Lima</div></div>
        <div className="order-card"><div className="oid">#PED-08114</div><div className="oname">Isabelly Souza</div></div>
      </div>
    </div>
  </div>

  <div className="exchange-section">
    <div className="col-head">Trocas pendentes</div>
    <div className="exchange-row">
      <span>#PED-08099 — Fernanda Lima — troca solicitada: Ovo de dragão colecionável</span>
      <div className="exchange-actions"><button className="btn-sm btn-authorize">Autorizar troca</button></div>
    </div>
    <div className="exchange-row">
      <span>#PED-08050 — Bruno Alves — troca autorizada, aguardando item</span>
      <div className="exchange-actions"><button className="btn-sm btn-receive">Confirmar recebimento</button></div>
    </div>
  </div>
</main>


      <style>{`
* { box-sizing:border-box; margin:0; padding:0; }
  
  .sidebar { width:220px; min-height:100vh; border-right:1px solid var(--border); padding:24px 16px; }
  .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:18px; margin-bottom:28px; padding:0 8px; }
  .logo span { color:var(--purple); }
  .nav-item { display:block; padding:10px 12px; border-radius:8px; font-size:13px; color:var(--text-secondary); margin-bottom:2px; cursor:pointer; }
  .nav-item.active { background:rgba(124,92,255,0.1); color:var(--purple); }
  main { flex:1; padding:32px 40px; }
  h1 { font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:700; margin-bottom:4px; }
  .subtitle { color:var(--text-secondary); font-size:13px; margin-bottom:24px; }
  .board { display:grid; grid-template-columns:repeat(5,1fr); gap:14px; }
  .col-head { font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-secondary); margin-bottom:10px; font-family:'JetBrains Mono',monospace; }
  .col { background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:12px; min-height:280px; }
  .order-card { background:var(--bg); border:1px solid var(--border); border-radius:10px; padding:10px; margin-bottom:8px; font-size:12px; }
  .order-card .oid { font-family:'JetBrains Mono',monospace; color:var(--text-secondary); font-size:10px; }
  .order-card .oname { margin:4px 0; }
  .advance-btn { width:100%; margin-top:6px; background:none; border:1px solid var(--purple); color:var(--purple); border-radius:6px; padding:5px; font-size:10px; cursor:pointer; }
  .exchange-section { margin-top:32px; }
  .exchange-row { display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:14px 18px; margin-bottom:10px; font-size:13px; }
  .exchange-actions { display:flex; gap:8px; }
  .btn-sm { padding:6px 12px; border-radius:6px; font-size:11px; cursor:pointer; }
  .btn-authorize { background:var(--purple); color:var(--bg); border:none; }
  .btn-receive { background:none; border:1px solid var(--mint); color:var(--mint); }
      `}</style>
    </>
  );
}
