import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tipo, titulo, autor, sinopse, contato, detalhes } = body;

    const dataHora = new Date().toLocaleString("pt-BR", { timeZone: "Africa/Maputo" });

    // Mensagem formatada para o Administrador Douglaci
    const corpoNotificacao = {
      destinatarioEmail: "douglacifrancisco@gmail.com",
      destinatarioTelefone: "+258870297999",
      assunto: `[JUST ONE NOVEL - ALERTA REAL] Nova Submissão: ${titulo || tipo}`,
      detalhes: {
        tipo: tipo || "SUBMISSAO_PREFEITURA",
        titulo: titulo || "Sem Título",
        autor: autor || "Anônimo",
        sinopse: sinopse || "Sem Sinopse",
        contatoAutor: contato || "Não informado",
        dataRegistro: dataHora,
        plataforma: "JUST ONE NOVEL - Mihara Hub Central",
        infoExtra: detalhes || {}
      }
    };

    // Log seguro do evento de notificação em produção
    console.log("=================================================");
    console.log("📲 DISPARO DE NOTIFICAÇÃO AO ADMINISTRADOR:");
    console.log(`Para Email: ${corpoNotificacao.destinatarioEmail}`);
    console.log(`Para SMS/WhatsApp: ${corpoNotificacao.destinatarioTelefone}`);
    console.log(`Evento: ${corpoNotificacao.assunto}`);
    console.log(JSON.stringify(corpoNotificacao.detalhes, null, 2));
    console.log("=================================================");

    // Webhook ou envio HTTP opcional para gateways externos (Resend, Twilio, Z-API)
    // Se houver WEBHOOK_ADMIN_URL nas envs da Vercel, dispara o POST
    const webhookUrl = process.env.ADMIN_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corpoNotificacao)
      }).catch((err) => console.error("Erro no webhook externo:", err));
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Notificação registrada com sucesso e enviada ao administrador.",
      timestamp: dataHora
    });
  } catch (error) {
    console.error("Erro ao processar notificação do admin:", error);
    return NextResponse.json(
      { sucesso: false, erro: "Falha interna ao disparar notificação." },
      { status: 500 }
    );
  }
}
