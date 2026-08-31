import SiteNav from "../../components/SiteNav";

export default function AdminAnalise() {
  return (
    <>
      <SiteNav current="/admin/analise" />

<div className="sidebar">
  <div className="logo">forge<span>craft</span> <span style={{fontSize: "10px", color: "var(--text-secondary)"}}>admin</span></div>
  <a href="/admin" className="nav-item">Clientes e pedidos</a>
  <a href="/admin/status" className="nav-item">Status de pedidos</a>
  <a href="/admin/produtos" className="nav-item">Produtos</a>
  <a href="/admin/estoque" className="nav-item">Estoque</a>
  <a href="/admin/analise" className="nav-item active">Análise de vendas</a>
</div>
<main>
  <h1>Análise de vendas</h1>
  <div className="filters-row">
    <input type="text" value="jan 2026" />
    <span style={{color: "var(--text-secondary)", fontSize: "12px"}}>até</span>
    <input type="text" value="ago 2026" />
    <div className="cat-chip active">Action figures</div>
    <div className="cat-chip active">Miniaturas RPG</div>
    <div className="cat-chip">Suportes gamer</div>
    <div className="cat-chip">Luminárias geek</div>
    <button className="export-btn">↓ Exportar planilha</button>
  </div>

  <div className="chart-card">
    <div className="chart-area">
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "60px"}}></div><div className="month-label">jan</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "90px"}}></div><div className="month-label">fev</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "70px"}}></div><div className="month-label">mar</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "120px"}}></div><div className="month-label">abr</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "100px"}}></div><div className="month-label">mai</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "150px"}}></div><div className="month-label">jun</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "130px"}}></div><div className="month-label">jul</div></div>
      <div className="month-col"><div className="bar-line-point" style={{marginBottom: "180px"}}></div><div className="month-label">ago</div></div>
    </div>
    <div className="legend">
      <div className="legend-item"><div className="legend-dot" style={{background: "var(--purple)"}}></div>Action figures</div>
      <div className="legend-item"><div className="legend-dot" style={{background: "var(--mint)"}}></div>Miniaturas RPG</div>
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
  h1 { font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:700; margin-bottom:20px; }
  .filters-row { display:flex; gap:12px; align-items:center; margin-bottom:24px; }
  .filters-row input, .filters-row select { background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:9px 12px; color:var(--text-primary); font-size:13px; }
  .cat-chip { padding:6px 12px; border-radius:8px; font-size:12px; border:1px solid var(--border); cursor:pointer; }
  .cat-chip.active { border-color:var(--purple); color:var(--purple); background:rgba(124,92,255,0.08); }
  .export-btn { margin-left:auto; background:none; border:1px solid var(--border); border-radius:8px; padding:9px 16px; font-size:12px; color:var(--text-primary); cursor:pointer; }
  .chart-card { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:24px; }
  .chart-area { height:260px; display:flex; align-items:flex-end; gap:24px; padding:0 10px; border-bottom:1px solid var(--border); position:relative; }
  .month-col { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%; gap:4px; position:relative; }
  .bar-line-point { width:8px; height:8px; border-radius:50%; background:var(--purple); }
  .month-label { font-size:10px; color:var(--text-secondary); font-family:'JetBrains Mono',monospace; margin-top:8px; }
  .legend { display:flex; gap:20px; margin-top:16px; }
  .legend-item { display:flex; align-items:center; gap:6px; font-size:12px; color:var(--text-secondary); }
  .legend-dot { width:8px; height:8px; border-radius:50%; }
      `}</style>
    </>
  );
}
