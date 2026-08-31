import SiteNav from "../components/SiteNav";

export default function Carrinho() {
  return (
    <>
      <SiteNav current="/carrinho" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <main>

        <h1>Seu carrinho</h1>

        <div className="layout">

          <div>

            <div className="item">

              <div className="item-img"></div>

              <div className="item-info">
                <div className="item-name">Guerreiro élfico articulado 18cm</div>
                <div className="item-cat">Action figure</div>
              </div>

              <div className="qty-control"><button>–</button><span>1</span><button>+</button></div>
              <div className="item-price">R$ 89,90</div>

              <button className="remove-btn">×</button>

            </div>

            <div className="item">

              <div className="item-img"></div>

              <div className="item-info">
                <div className="item-name">Dragão vermelho base hexagonal</div>
                <div className="item-cat">Miniatura RPG</div>
              </div>

              <div className="qty-control"><button>–</button><span>2</span><button>+</button></div>
              <div className="item-price">R$ 129,00</div>

              <button className="remove-btn">×</button>

            </div>

            <div className="item">

              <div className="item-img"></div>

              <div className="item-info">
                <div className="item-name">Luminária holograma nave espacial</div>
                <div className="item-cat">Luminária geek</div>
              </div>

              <div className="qty-control"><button>–</button><span>1</span><button>+</button></div>
              <div className="item-price">R$ 129,90</div>

              <button className="remove-btn">×</button>

            </div>

          </div>

          <div className="panel">

            <h3>Cupom</h3>

            <div className="coupon-applied">✓ PROMO10 aplicado — R$ 34,88 de desconto <span>remover</span></div>

            <div className="coupon-row">
              <input type="text" placeholder="Adicionar outro cupom" />
              <button>Aplicar</button>
            </div>

            <h3>Forma de pagamento</h3>

            <div className="card-option">

              <input type="checkbox" checked readOnly />
              <span>Nubank •••• 4471</span>
              <span className="card-value">R$ 200,00</span>

            </div>

            <div className="card-option">

              <input type="checkbox" checked readOnly />
              <span>Inter •••• 8823</span>
              <span className="card-value">R$ 113,92</span>

            </div>

            <span className="add-card-link">+ Adicionar novo cartão</span>

            <div className="totals-row"><span>Subtotal</span><span>R$ 348,80</span></div>
            <div className="totals-row"><span>Cupom PROMO10</span><span>– R$ 34,88</span></div>
            <div className="totals-row"><span>Frete</span><span>R$ 0,00</span></div>
            <div className="totals-row total"><span>Total</span><span>R$ 313,92</span></div>

            <a href="/entrega" className="checkout-btn">Continuar para entrega</a>

          </div>
        </div>
      </main>


      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
        .logo span { color:var(--purple); }
        main { max-width:1100px; margin:0 auto; padding:40px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:24px; font-weight:700; margin-bottom:28px; }
        .layout { display:grid; grid-template-columns:1.6fr 1fr; gap:32px; align-items:start; }
        .item { display:flex; gap:16px; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:16px; margin-bottom:14px; align-items:center; }
        .item-img { width:64px; height:64px; border-radius:10px; background:#23273A; flex-shrink:0; }
        .item-info { flex:1; }
        .item-name { font-size:14px; font-weight:500; margin-bottom:4px; }
        .item-cat { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-secondary); }
        .qty-control { display:flex; align-items:center; background:var(--bg); border:1px solid var(--border); border-radius:8px; }
        .qty-control button { width:28px; height:28px; background:none; border:none; color:var(--text-primary); cursor:pointer; }
        .qty-control span { width:26px; text-align:center; font-family:'JetBrains Mono',monospace; font-size:13px; }
        .item-price { font-family:'JetBrains Mono',monospace; font-size:14px; font-weight:500; width:80px; text-align:right; }
        .remove-btn { color:var(--text-secondary); background:none; border:none; cursor:pointer; font-size:16px; margin-left:8px; }
        .panel { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:20px; }
        .panel h3 { font-size:14px; font-weight:500; margin-bottom:14px; }
        .coupon-row { display:flex; gap:8px; margin-bottom:16px; }
        .coupon-row input { flex:1; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px; color:var(--text-primary); font-size:13px; }
        .coupon-row button { background:none; border:1px solid var(--border); border-radius:8px; padding:10px 14px; color:var(--text-primary); font-size:13px; cursor:pointer; }
        .coupon-applied { display:flex; justify-content:space-between; align-items:center; background:rgba(0,224,184,0.1); color:var(--mint); font-size:12px; padding:8px 12px; border-radius:8px; margin-bottom:16px; }
        .card-option { display:flex; align-items:center; gap:10px; padding:10px; border:1px solid var(--border); border-radius:8px; margin-bottom:8px; font-size:13px; }
        .card-option input { accent-color:var(--purple); }
        .card-value { margin-left:auto; font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--text-secondary); width:70px; }
        .add-card-link { font-size:12px; color:var(--purple); cursor:pointer; margin-bottom:20px; display:block; }
        .totals-row { display:flex; justify-content:space-between; font-size:13px; color:var(--text-secondary); padding:6px 0; }
        .totals-row.total { color:var(--text-primary); font-weight:500; font-size:15px; border-top:1px solid var(--border); margin-top:8px; padding-top:14px; }
        .checkout-btn { display:block; text-align:center; width:100%; background:var(--purple); color:var(--bg); border:none; border-radius:10px; padding:14px; font-weight:500; font-size:14px; margin-top:16px; cursor:pointer; }
      `}</style>
      
    </>
  );
}
