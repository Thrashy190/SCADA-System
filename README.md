# SCADA Web - Arduino System

This is my SCADA project for the programmable systems class is build with:

- [NextJS](https://nextjs.org/)
- [Node-RED](https://nodered.org/)
- [Arduino IDE (C++)](https://www.arduino.cc/en/software)

## Run whit Docker

```bash
docker-compose up -d
```

```bash
docker run -d -p 1880:1880 -v /ruta/al/archivo/flow.json:/data/flows.json --name node-red nodered/node-red
```
