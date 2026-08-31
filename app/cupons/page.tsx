import SiteNav from "../components/SiteNav";

export default function Cupons() {
  return (
    <>
      <SiteNav current="/cupons" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <main>

        <h1>Meus cupons</h1>

        <div className="subtitle">Cupons de troca e promocionais disponíveis para uso</div>

        <div className="coupon">

          <div className="coupon-value">R$ 10</div>

          <div className="coupon-body">
            <div className="coupon-code">TROCA-A82F1</div>
            <div className="coupon-desc">Gerado por troca do pedido #PED-07998 · válido até 20 nov 2026</div>
          </div>

          <span className="coupon-tag tag-troca">troca</span>

        </div>

        <div className="coupon">

          <div className="coupon-value">10%</div>

          <div className="coupon-body">
            <div className="coupon-code">PROMO10</div>
            <div className="coupon-desc">Desconto promocional em qualquer compra · válido até 01 set 2026</div>
          </div>

          <span className="coupon-tag tag-promo">promocional</span>

        </div>

        <div className="coupon expired">

          <div className="coupon-value">R$ 25</div>

          <div className="coupon-body">
            <div className="coupon-code">TROCA-1C904</div>
            <div className="coupon-desc">Expirado em 12 ago 2026</div>
          </div>

          <span className="coupon-tag tag-troca">troca</span>

        </div>

      </main>

      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
        .logo span { color:var(--purple); }
        main { max-width:800px; margin:0 auto; padding:40px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:22px; font-weight:700; margin-bottom:6px; }
        .subtitle { color:var(--text-secondary); font-size:13px; margin-bottom:28px; }
        .coupon { display:flex; align-items:center; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:18px; margin-bottom:12px; position:relative; overflow:hidden; }
        .coupon::before { content:""; position:absolute; left:100px; top:-8px; bottom:-8px; width:1px; border-left:2px dashed var(--border); }
        .coupon-value { width:100px; text-align:center; font-family:'JetBrains Mono',monospace; font-size:20px; font-weight:500; color:var(--mint); }
        .coupon-
        .coupon-code { font-family:'JetBrains Mono',monospace; font-size:13px; font-weight:500; margin-bottom:4px; }
        .coupon-desc { font-size:12px; color:var(--text-secondary); }
        .coupon-tag { font-size:10px; padding:4px 10px; border-radius:6px; font-family:'JetBrains Mono',monospace; }
        .tag-troca { background:rgba(124,92,255,0.15); color:var(--purple); }
        .tag-promo { background:rgba(0,224,184,0.12); color:var(--mint); }
        .coupon.expired { opacity:0.4; }
      `}</style>
      
    </>
  );
}
