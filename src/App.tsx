import { useState } from 'react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const callGrok = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse('');
    setTimeout(() => {
      setResponse(`Resposta da IA para: "${prompt}"\n\nDashboard funcional com React + Vite. Pronto para Grok API (xAI).`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a, #6b21a8)', padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          DevFrontIA - Dashboard com Grok
        </h1>
        
        <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
          <textarea
            style={{ width: '100%', padding: '1rem', border: '2px solid #c4b5fd', borderRadius: '8px', fontSize: '1.1rem', resize: 'none' }}
            rows={4}
            placeholder="Digite sua pergunta para a IA..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          
          <button
            onClick={callGrok}
            disabled={loading}
            style={{ 
              marginTop: '1rem', width: '100%', background: 'linear-gradient(to right, #7c3aed, #3b82f6)', 
              color: 'white', fontWeight: 'bold', padding: '1rem', borderRadius: '8px', border: 'none', fontSize: '1.1rem',
              opacity: loading ? 0.5 : 1, cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? "Processando..." : "Enviar para IA"}
          </button>

          {response && (
            <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: '#f3f4f6', borderRadius: '8px', border: '1px solid #d8b4fe' }}>
              <p style={{ fontWeight: 'bold', color: '#6b21a8', marginBottom: '0.5rem' }}>Resposta da IA:</p>
              <p style={{ color: '#374151', whiteSpace: 'pre-wrap' }}>{response}</p>
            </div>
          )}
        </div>

        <p style={{ textAlign: 'center', color: 'white', marginTop: '2rem', fontSize: '0.875rem' }}>
          Feito por <strong>DevFrontIA</strong> | Full Stack + IA
        </p>
      </div>
    </div>
  );
}
