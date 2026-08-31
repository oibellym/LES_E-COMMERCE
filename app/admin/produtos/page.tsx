import SiteNav from "../../components/SiteNav";

export default function AdminProdutos() {
  return (
    <>
      <SiteNav current="/admin/produtos" />

<div className="sidebar">
  <div className="logo">forge<span>craft</span></div>
  <a href="/admin" className="nav-item">Clientes e pedidos</a>
  <a href="/admin/status" className="nav-item">Status de pedidos</a>
  <a href="/admin/produtos" className="nav-item active">Produtos</a>
  <a href="/admin/estoque" className="nav-item">Estoque</a>
  <a href="/admin/analise" className="nav-item">Análise de vendas</a>
</div>
<main>
  <h1>Cadastrar produto</h1>
  <div className="row2">
    <div><label>Nome do produto</label><input type="text" placeholder="Ex: Dragão vermelho base hexagonal" /></div>
    <div><label>Categoria</label><select><option>Action figures</option><option>Miniaturas RPG</option></select></div>
  </div>
  <label>Descrição</label>
  <textarea rows={3} placeholder="Descrição do produto"></textarea>
  <div className="row2">
    <div><label>Preço (R$)</label><input type="text" placeholder="0,00" /></div>
    <div><label>Estoque inicial</label><input type="text" placeholder="0" /></div>
  </div>
  <div className="row2">
    <div><label>Material</label><input type="text" placeholder="PLA, resina..." /></div>
    <div><label>Código (SKU)</label><input type="text" placeholder="Gerado automaticamente" disabled /></div>
  </div>
  <button>Salvar produto</button>
</main>


      <style>{`
* { box-sizing:border-box; margin:0; padding:0; }
  
  .sidebar { width:200px; min-height:100vh; border-right:1px solid var(--border); padding:24px 16px; }
  .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:16px; margin-bottom:24px; }
  .logo span { color:var(--purple); }
  .nav-item { display:block; padding:9px 10px; border-radius:8px; font-size:12px; color:var(--text-secondary); margin-bottom:2px; }
  .nav-item.active { color:var(--purple); }
  main { flex:1; padding:32px 40px; max-width:560px; }
  h1 { font-family:'Space Grotesk',sans-serif; font-size:20px; font-weight:700; margin-bottom:20px; }
  label { display:block; font-size:11px; color:var(--text-secondary); margin-bottom:5px; margin-top:12px; }
  input, select, textarea { width:100%; background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:9px 12px; color:var(--text-primary); font-size:13px; }
  .row2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  button { background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:11px 20px; font-weight:500; font-size:13px; margin-top:20px; }
      `}</style>
    </>
  );
}
