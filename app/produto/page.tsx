import SiteNav from "../components/SiteNav";

export default function DetalheProduto() {
  return (
    <>
      <SiteNav current="/produto" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <main>

        <div className="breadcrumb">Catálogo / Action figures / <span>Guerreiro élfico articulado 18cm</span></div>

        <div className="product-layout">

          <div>

            <div className="gallery-main">[imagem principal do produto]</div>

            <div className="gallery-thumbs">
              <div className="thumb active"></div>
              <div className="thumb"></div>
              <div className="thumb"></div>
              <div className="thumb"></div>
            </div>

          </div>

          <div>

            <div className="cat-tag">Action figure</div>

            <h1>Guerreiro élfico articulado 18cm</h1>

            <div className="price">R$ 89,90</div>
            <div className="stock-status">● Pronta entrega — 12 unidades</div>
            <p className="desc">Miniatura articulada impressa em PLA premium, com 14 pontos de articulação e acabamento pintado à mão. Base inclusa. Peça exclusiva com licença de personagem original.</p>
            <div className="spec-row"><span className="spec-label">Material</span><span>PLA premium</span></div>
            <div className="spec-row"><span className="spec-label">Altura</span><span>18 cm</span></div>
            <div className="spec-row"><span className="spec-label">Peso</span><span>180 g</span></div>
            <div className="spec-row"><span className="spec-label">Prazo de impressão</span><span>Imediato (em estoque)</span></div>

            <div className="qty-row">
              <div className="qty-control"><button>–</button><span>1</span><button>+</button></div>
              <a href="/carrinho" className="add-cart-btn">Adicionar ao carrinho — R$ 89,90</a>
            </div>

          </div>

        </div>
        
      </main>

      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
        .logo span { color:var(--purple); }
        main { max-width:1100px; margin:0 auto; padding:40px; }
        .breadcrumb { font-size:13px; color:var(--text-secondary); margin-bottom:24px; }
        .breadcrumb span { color:var(--text-primary); }
        .product-layout { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
        .gallery-main { height:380px; border-radius:14px; background:linear-gradient(135deg,#23273A,#1A1D26); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:#3A3F52; font-family:'JetBrains Mono',monospace; font-size:13px; margin-bottom:12px; }
        .gallery-thumbs { display:flex; gap:10px; }
        .thumb { width:64px; height:64px; border-radius:8px; background:#1C1F29; border:1px solid var(--border); }
        .thumb.active { border-color:var(--purple); }
        .cat-tag { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:26px; font-weight:700; margin-bottom:12px; line-height:1.2; }
        .price { font-family:'JetBrains Mono',monospace; font-size:26px; font-weight:500; margin-bottom:20px; }
        .stock-status { display:inline-flex; align-items:center; gap:6px; background:rgba(0,224,184,0.12); color:var(--mint); font-size:12px; padding:6px 12px; border-radius:8px; margin-bottom:24px; }
        .desc { color:var(--text-secondary); font-size:14px; line-height:1.6; margin-bottom:24px; }
        .spec-row { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--border); font-size:13px; }
        .spec-label { color:var(--text-secondary); }
        .qty-row { display:flex; align-items:center; gap:16px; margin:24px 0; }
        .qty-control { display:flex; align-items:center; background:var(--surface); border:1px solid var(--border); border-radius:10px; }
        .qty-control button { width:36px; height:36px; background:none; border:none; color:var(--text-primary); font-size:16px; cursor:pointer; }
        .qty-control span { width:36px; text-align:center; font-family:'JetBrains Mono',monospace; }
        .add-cart-btn { flex:1; display:flex; align-items:center; justify-content:center; text-align:center; background:var(--purple); color:var(--bg); border:none; border-radius:10px; padding:14px; font-family:'Inter',sans-serif; font-weight:500; font-size:14px; cursor:pointer; }
      `}</style>
    </>
  );
}
