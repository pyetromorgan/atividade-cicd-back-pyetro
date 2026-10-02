import http from "node:http";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === "GET" && req.url === "/api/status") {

        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });

        res.end(
            JSON.stringify({
                status: "online",
                mensagem: "Backend publicado no Render via GitHub Actions",
                versao: "1.0.0"
            })
        );

        return;
    }

    res.writeHead(404, {
        "Content-Type": "application/json; charset=utf-8"
    });

    res.end(
        JSON.stringify({
            erro: "Rota não encontrada"
        })
    );
});

server.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});