export async function POST(req) {
  const { receita, lucro, tempo } = await req.json();
  const r = Number(receita),
    l = Number(lucro),
    t = Number(tempo);
  if ([r, l, t].some((n) => Number.isNaN(n))) {
    return Response.json({ error: "Dados inválidos" }, { status: 400 });
  }
  const margem = l / Math.max(r, 1);
  const multiploLucro = margem > 0.2 ? 4 : margem > 0.1 ? 3.5 : 3;
  const multiploReceita = t > 5 ? 0.4 : 0.3;
  const valuation = l * multiploLucro + r * multiploReceita;
  return Response.json({ valuation: Number(valuation.toFixed(2)) });
}
