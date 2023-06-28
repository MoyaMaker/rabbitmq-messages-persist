const amqp = require("amqplib");

async function consumeMessage() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const queue = "mi_cola";

    await channel.assertQueue(queue, { durable: true });

    channel.consume(
      queue,
      (message) => {
        console.log("Mensaje recibido:", message.content.toString());
        channel.ack(message);
      },
      { noAck: false }
    );
  } catch (error) {
    console.error("Error al consumir el mensaje:", error);
  }
}

consumeMessage();
