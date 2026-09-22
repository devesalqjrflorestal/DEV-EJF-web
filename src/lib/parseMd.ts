import fs from 'fs';
import path from 'path';

function lerArquivo(nomeArquivo: string): string {
  try {
    const caminho = path.join(process.cwd(), 'src', 'conteudo', nomeArquivo);
    return fs.readFileSync(caminho, 'utf-8');
  } catch {
    return '';
  }
}

// Divide o conteúdo em blocos separados por --- e parseia cada um
// Tolerante: ignora linhas sem ":", ignora blocos vazios, ignora espaços extras
function parsearBlocos(conteudo: string): Record<string, string>[] {
  return conteudo
    .split('---')
    .map(bloco => bloco.trim())
    .filter(Boolean)
    .map(bloco => {
      const entrada: Record<string, string> = {};
      bloco.split('\n').forEach(linha => {
        const idx = linha.indexOf(':');
        if (idx === -1) return;
        const chave = linha.slice(0, idx).trim().toLowerCase();
        const valor = linha.slice(idx + 1).trim();
        if (chave && valor) entrada[chave] = valor;
      });
      return entrada;
    })
    .filter(entrada => Object.keys(entrada).length > 0);
}

export interface MembroData {
  nome: string;
  cargo: string;
  curso: string;
  foto: string;
}

export function parseMembros(): MembroData[] {
  const blocos = parsearBlocos(lerArquivo('membros.md'));
  return blocos
    .filter(b => b.nome && b.cargo && b.curso && b.foto)
    .map(b => ({
      nome: b.nome,
      cargo: b.cargo,
      curso: b.curso,
      foto: b.foto,
    }));
}

export interface ParceiroData {
  nome: string;
  logo: string;
}

export function parseParceiros(): ParceiroData[] {
  return lerArquivo('parceiros.md')
    .split('\n')
    .map(linha => linha.trim())
    .filter(linha => linha && !linha.startsWith('#'))
    .map(linha => {
      const idx = linha.indexOf(':');
      if (idx === -1) return null;
      const nome = linha.slice(0, idx).trim();
      const logo = linha.slice(idx + 1).trim();
      if (!nome || !logo) return null;
      return { nome, logo };
    })
    .filter((item): item is ParceiroData => item !== null);
}
