### docker
docker run -it --rm --name npm -v $PWD:/app -w /app node:16 npm install
docker run -it --rm --name npm -v $PWD:/app -w /app node:16 npm run build
docker run -it --rm --name npm -v $PWD:/app -w /app node:16 npm run watch
