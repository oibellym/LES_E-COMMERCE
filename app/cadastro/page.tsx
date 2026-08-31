import SiteNav from "../components/SiteNav";

export default function Cadastro() {
  return (
    <>
      <SiteNav current="/cadastro" />

      <div className="center-wrap">
        <div className="box">
          <div className="logo">forge<span>craft</span></div>
          <p className="subtitle">Crie sua conta para acompanhar pedidos, cupons e favoritos</p>

          <label>Nome completo</label>
          <input type="text" placeholder="Seu nome completo" />

          <div className="form-row-2">
            <div>
              <label>CPF</label>
              <input type="text" placeholder="000.000.000-00" />
            </div>
            <div>
              <label>Telefone</label>
              <input type="text" placeholder="(11) 90000-0000" />
            </div>
          </div>

          <label>E-mail</label>
          <input type="text" placeholder="seu@email.com" />

          <label>Senha</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirmar senha</label>
          <input type="password" placeholder="••••••••" />

          <a href="/perfil" className="cadastro-btn">Criar conta</a>

          <div className="switch">Já tem conta? <a href="/login">Entrar</a></div>
        </div>
      </div>

      <style>{`
        * { box-sizing:border-box; }
        .center-wrap { min-height:calc(100vh - 53px); display:flex; align-items:center; justify-content:center; padding:32px 16px; }
        .box { width:380px; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:32px; }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; text-align:center; margin-bottom:8px; }
        .logo span { color:var(--purple); }
        .subtitle { font-size:12px; color:var(--text-secondary); text-align:center; margin-bottom:22px; line-height:1.4; }
        label { display:block; font-size:12px; color:var(--text-secondary); margin-bottom:6px; margin-top:12px; }
        label:first-of-type { margin-top:0; }
        input { width:100%; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px 12px; color:var(--text-primary); font-size:13px; }
        .form-row-2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px; }
        .form-row-2 label { margin-top:0; }
        .cadastro-btn { display:block; text-align:center; width:100%; background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:12px; font-weight:500; font-size:13px; margin-top:22px; cursor:pointer; }
        .switch { text-align:center; font-size:12px; color:var(--text-secondary); margin-top:16px; }
        .switch a { color:var(--purple); }
      `}</style>
    </>
  );
}
