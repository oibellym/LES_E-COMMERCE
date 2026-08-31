import SiteNav from "../components/SiteNav";

export default function EnderecoEntrega() {
  return (
    <>
      <SiteNav current="/entrega" />

<header>
  <div className="logo">forge<span>craft</span></div>
</header>
<main>
  <h1>Endereço de entrega</h1>
  <div className="subtitle">Escolha um endereço cadastrado ou adicione um novo</div>

  <div className="addr-card selected">
    <div className="radio"></div>
    <div>
      <div className="addr-name">Casa</div>
      <div className="addr-detail">Rua das Palmeiras, 245 — Jardim Imperial<br />Suzano, SP — CEP 08674-000</div>
    </div>
  </div>

  <div className="addr-card">
    <div className="radio"></div>
    <div>
      <div className="addr-name">Trabalho</div>
      <div className="addr-detail">Av. Piraporinha, 1200 — Centro<br />Suzano, SP — CEP 08670-030</div>
    </div>
  </div>

  <div className="add-new"><div className="plus-icon">+</div> Cadastrar novo endereço de entrega</div>

  <div className="form open">
    <div className="form-row"><label>CEP</label><input type="text" placeholder="08674-000" /></div>
    <div className="form-row"><label>Nome do endereço</label><input type="text" placeholder="Ex: Casa da minha mãe" /></div>
    <div className="form-row"><label>Rua e número</label><input type="text" placeholder="Rua, número" /></div>
    <div className="form-row"><label>Bairro / cidade</label><input type="text" placeholder="Bairro, cidade — UF" /></div>
  </div>

  <a href="/confirmacao" className="continue-btn">Continuar para pagamento</a>
</main>


      <style>{`
* { box-sizing:border-box; margin:0; padding:0; }
  
  header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
  .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
  .logo span { color:var(--purple); }
  main { max-width:640px; margin:0 auto; padding:40px; }
  h1 { font-family:'Space Grotesk',sans-serif; font-size:24px; font-weight:700; margin-bottom:6px; }
  .subtitle { color:var(--text-secondary); font-size:14px; margin-bottom:28px; }
  .addr-card { display:flex; gap:14px; align-items:flex-start; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:16px; margin-bottom:12px; cursor:pointer; }
  .addr-card.selected { border-color:var(--purple); background:rgba(124,92,255,0.06); }
  .radio { width:18px; height:18px; border-radius:50%; border:2px solid var(--border); margin-top:2px; flex-shrink:0; }
  .addr-card.selected .radio { border-color:var(--purple); background:radial-gradient(circle,var(--purple) 0 40%,transparent 44%); }
  .addr-name { font-size:14px; font-weight:500; margin-bottom:4px; }
  .addr-detail { font-size:13px; color:var(--text-secondary); line-height:1.5; }
  .add-new { display:flex; align-items:center; gap:10px; border:1px dashed var(--border); border-radius:14px; padding:16px; color:var(--text-secondary); font-size:14px; cursor:pointer; margin-top:8px; }
  .plus-icon { width:22px; height:22px; border-radius:50%; border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:13px; }
  .form { margin-top:20px; display:none; }
  .form.open { display:block; }
  .form-row { margin-bottom:12px; }
  .form-row label { display:block; font-size:12px; color:var(--text-secondary); margin-bottom:6px; }
  .form-row input { width:100%; background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:10px 12px; color:var(--text-primary); font-size:13px; }
  .continue-btn { width:100%; background:var(--purple); color:var(--bg); border:none; border-radius:10px; padding:14px; font-weight:500; font-size:14px; margin-top:24px; cursor:pointer; }
      `}</style>
    </>
  );
}
