const amqp = require("amqplib");

async function publishMessage() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const queue = "mi_cola";

    await channel.assertQueue(queue, { durable: true });
    const message = process.argv[2] || "¡Hola, RabbitMQ!";

    channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
    console.log("Mensaje publicado:", message);

    await channel.close();
    await connection.close();
  } catch (error) {
    console.error("Error al publicar el mensaje:", error);
  }
}

publishMessage();
