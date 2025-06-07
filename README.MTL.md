# Criar chave e CSR do cliente
openssl genrsa -out client-key.pem 2048
openssl req -new -key client-key.pem -out client.csr

