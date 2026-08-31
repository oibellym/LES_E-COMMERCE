import SiteNav from "../components/SiteNav";

export default function Pedidos() {
  return (
    <>
      <SiteNav current="/pedidos" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <main>

        <h1>Meus pedidos</h1>

        <div>

          <div className="order-item selected">

            <div className="order-top"><span className="order-id">#PED-08231</span><span className="order-status-pill st-transito">em trânsito</span></div>
            <div className="order-date">18 ago 2026 · 3 itens</div>
            <div className="order-total">R$ 313,92</div>

          </div>

          <div className="order-item">

            <div className="order-top"><span className="order-id">#PED-08114</span><span className="order-status-pill st-entregue">entregue</span></div>
            <div className="order-date">02 ago 2026 · 1 item</div>
            <div className="order-total">R$ 64,50</div>

          </div>

        </div>

        <div className="detail-card">

          <div className="detail-header">

            <div>
              <div className="detail-id">Pedido #PED-08231</div>
              <div style={{fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px"}}>Feito em 18 ago 2026</div>
            </div>
            <div style={{fontFamily: "'JetBrains Mono',monospace", fontSize: "16px", fontWeight: "500"}}>R$ 313,92</div>

          </div>

          <div className="progress-labels">

            <span className="active">Em aberto</span><span className="active">Processando</span><span className="active">Pagamento</span><span className="active">Em trânsito</span><span>Entregue</span>

          </div>

          <div className="progress-track">
            <div className="layer filled"></div><div className="layer filled"></div><div className="layer filled"></div><div className="layer filled"></div><div className="layer"></div>
          </div>

          <div className="item-row"><div className="thumb"></div><span>Guerreiro élfico articulado 18cm — 1x</span></div>
          <div className="item-row"><div className="thumb"></div><span>Dragão vermelho base hexagonal — 2x</span></div>
          <div className="item-row"><div className="thumb"></div><span>Luminária holograma nave espacial — 1x</span></div>

          <div className="actions">

            <div className="btn btn-primary">Confirmar recebimento</div>
            <div className="btn btn-secondary">Solicitar troca</div>
            <div className="btn btn-danger">Cancelar pedido</div>

          </div>

        </div>

      </main>


      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
        .logo span { color:var(--purple); }
        main { max-width:1000px; margin:0 auto; padding:40px; display:grid; grid-template-columns:340px 1fr; gap:28px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:700; margin-bottom:20px; grid-column:1/-1; }
        .order-item { background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:14px; margin-bottom:10px; cursor:pointer; }
        .order-item.selected { border-color:var(--purple); }
        .order-top { display:flex; justify-content:space-between; margin-bottom:6px; }
        .order-id { font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--text-secondary); }
        .order-status-pill { font-size:10px; padding:3px 8px; border-radius:6px; font-family:'JetBrains Mono',monospace; }
        .st-transito { background:rgba(124,92,255,0.15); color:var(--purple); }
        .st-entregue { background:rgba(0,224,184,0.12); color:var(--mint); }
        .order-date { font-size:12px; color:var(--text-secondary); }
        .order-total { font-family:'JetBrains Mono',monospace; font-size:13px; font-weight:500; margin-top:4px; }
        .detail-card { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:24px; }
        .detail-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; }
        .detail-id { font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text-secondary); }
        .progress-track { display:flex; align-items:center; margin:24px 0; }
        .layer { flex:1; height:6px; background:var(--border); position:relative; }
        .layer.filled { background:var(--purple); }
        .layer:not(:last-child) { margin-right:4px; }
        .progress-labels { display:flex; justify-content:space-between; font-size:10px; color:var(--text-secondary); font-family:'JetBrains Mono',monospace; margin-bottom:4px; }
        .progress-labels .active { color:var(--purple); }
        .item-row { display:flex; gap:12px; align-items:center; padding:10px 0; border-bottom:1px solid var(--border); font-size:13px; }
        .item-row .thumb { width:40px; height:40px; border-radius:8px; background:#23273A; }
        .actions { display:flex; gap:10px; margin-top:24px; }
        .btn { flex:1; border-radius:10px; padding:12px; font-size:13px; font-weight:500; cursor:pointer; text-align:center; }
        .btn-primary { background:var(--purple); color:var(--bg); border:none; }
        .btn-secondary { background:none; border:1px solid var(--border); color:var(--text-primary); }
        .btn-danger { background:none; border:1px solid var(--red); color:var(--red); }
      `}</style>
    </>
  );
}
