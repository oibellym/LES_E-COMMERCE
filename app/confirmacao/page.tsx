import SiteNav from "../components/SiteNav";

export default function ConfirmacaoPedido() {
  return (
    <>
      <SiteNav current="/confirmacao" />

      <div className="center-wrap">

        <div className="box">

          <div className="check">✓</div>
          <h1>Pedido confirmado</h1>
          <p>Seu pedido está sendo processado e você vai acompanhar o status em tempo real.</p>
          <div className="oid">#PED-08232</div>
          <a href="/pedidos" className="track-btn">Acompanhar pedido</a>
          
        </div>
        
      </div>

      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        .center-wrap { min-height:calc(100vh - 53px); display:flex; align-items:center; justify-content:center; }
        .box { width:420px; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:36px; text-align:center; }
        .check { width:52px; height:52px; border-radius:50%; background:rgba(0,224,184,0.12); color:var(--mint); font-size:24px; display:flex; align-items:center; justify-content:center; margin:0 auto 18px; }
        h1 { font-family:'Space Grotesk',sans-serif; font-size:19px; font-weight:700; margin-bottom:8px; }
        p { color:var(--text-secondary); font-size:13px; margin-bottom:20px; }
        .oid { font-family:'JetBrains Mono',monospace; font-size:13px; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px; margin-bottom:20px; }
        .track-btn { display:block; text-align:center; width:100%; background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:12px; font-weight:500; font-size:13px; }
      `}</style>

    </>
  );
}
