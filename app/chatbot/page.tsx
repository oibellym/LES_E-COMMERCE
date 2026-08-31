import SiteNav from "../components/SiteNav";

export default function Chatbot() {
  return (
    <>
      <SiteNav current="/chatbot" />

      <header>
        <div className="logo">forge<span>craft</span></div>
      </header>

      <div className="chat-panel">

        <div className="chat-head">

          <div className="chat-avatar">AI</div>

          <div>
            <div className="chat-title">Assistente de recomendação</div>
            <div className="chat-subtitle">● online</div>
          </div>

        </div>

        <div className="chat-body">

          <div className="msg bot">Oi! Vi que você curte miniaturas de RPG. Quer sugestões parecidas com o que já comprou?</div>

          <div className="msg user">Sim, algo de dragões</div>

          <div className="msg bot">

            Encontrei essas opções:
            <div className="suggestion-card">

              <div className="thumb"></div>

              <div>
                <div className="suggestion-name">Dragão negro alado 25cm</div>
                <div className="suggestion-price">R$ 145,00</div>
              </div>

            </div>

            <div className="suggestion-card">

              <div className="thumb"></div>

              <div>
                <div className="suggestion-name">Ovo de dragão colecionável</div>
                <div className="suggestion-price">R$ 38,00</div>
              </div>

            </div>

          </div>

        </div>

        <div className="chat-input-row">

          <input type="text" placeholder="Pergunte algo..." />
          <button className="send-btn">→</button>

        </div>
      </div>

      <div className="fab">💬</div>

      <style>{`
      * { box-sizing:border-box; margin:0; padding:0; }
        
        header { display:flex; align-items:center; justify-content:space-between; padding:20px 40px; border-bottom:1px solid var(--border); }
        .logo { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; }
        .logo span { color:var(--purple); }
        .fab { position:absolute; bottom:32px; right:32px; width:56px; height:56px; border-radius:50%; background:var(--purple); display:flex; align-items:center; justify-content:center; color:var(--bg); font-size:22px; }
        .chat-panel { position:absolute; bottom:100px; right:32px; width:340px; background:var(--surface); border:1px solid var(--border); border-radius:16px; overflow:hidden; display:flex; flex-direction:column; }
        .chat-head { display:flex; align-items:center; gap:10px; padding:14px 16px; border-bottom:1px solid var(--border); }
        .chat-avatar { width:30px; height:30px; border-radius:50%; background:var(--purple); display:flex; align-items:center; justify-content:center; font-size:14px; color:var(--bg); font-weight:500; }
        .chat-title { font-size:13px; font-weight:500; }
        .chat-subtitle { font-size:11px; color:var(--mint); }
        .msg { max-width:80%; padding:10px 12px; border-radius:12px; font-size:13px; line-height:1.4; margin: 10px; }
        .msg.bot { background:var(--bg); border:1px solid var(--border); justify-self: flex-start; border-bottom-left-radius:4px; }
        .msg.user { background:var(--purple); color:var(--bg); border:1px solid var(--border); justify-self: flex-end; border-bottom-right-radius:4px; }
        .suggestion-card { display:flex; gap:10px; align-items:center; background:var(--bg); border:1px solid var(--border); border-radius:10px; padding:8px; margin-top:4px; }
        .suggestion-card .thumb { width:36px; height:36px; border-radius:6px; background:#23273A; flex-shrink:0; }
        .suggestion-name { font-size:12px; font-weight:500; }
        .suggestion-price { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-secondary); }
        .chat-input-row { display:flex; gap:8px; padding:12px; border-top:1px solid var(--border); }
        .chat-input-row input { flex:1; background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:10px; color:var(--text-primary); font-size:13px; }
        .send-btn { width:36px; height:36px; border-radius:8px; background:var(--purple); border:none; color:var(--bg); font-size:14px; }
      `}</style>

    </>
  );
}
