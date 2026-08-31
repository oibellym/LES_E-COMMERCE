import SiteNav from "../components/SiteNav";

export default function Login() {
  return (
    <>
      <SiteNav current="/login" />

<div className="center-wrap">
<div className="box">
  <div className="logo">forge<span>craft</span></div>
  <label>E-mail</label>
  <input type="text" placeholder="seu@email.com" />
  <label>Senha</label>
  <input type="password" placeholder="••••••••" />
  <a href="/perfil" className="login-btn">Entrar</a>
  <div className="switch">Não tem conta? <a href="/perfil">Cadastre-se</a></div>
</div>
</div>


      <style>{`
* { box-sizing:border-box; margin:0; padding:0; }
  .center-wrap { min-height:calc(100vh - 53px); display:flex; align-items:center; justify-content:center; }
  .box { width:340px; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:32px; }
  .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; text-align:center; margin-bottom:24px; }
  .logo span { color:var(--purple); }
  label { display:block; font-size:12px; color:var(--text-secondary); margin-bottom:6px; }
  input { width:100%; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px 12px; color:var(--text-primary); font-size:13px; margin-bottom:14px; }
  .login-btn { display:block; text-align:center; width:100%; background:var(--purple); color:var(--bg); border:none; border-radius:8px; padding:12px; font-weight:500; font-size:13px; margin-top:6px; }
  .switch { text-align:center; font-size:12px; color:var(--text-secondary); margin-top:16px; }
  .switch a { color:var(--purple); }
      `}</style>
    </>
  );
}
