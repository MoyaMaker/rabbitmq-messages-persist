# Hello there! 👋

This is an example of using RabbitMQ.

First should install dependencies `npm i`

## How to use it?

Now we need 2 terminals. One use it to run the `consumer.js`

```
node .\consumer.js
```

And the second we will run the `publisher.js`

```
node .\publisher.js
```

The out of `publisher.js` should be `Mensaje publicado: ¡Hola, RabbitMQ!`

And in the first terminal we should see `Mensaje recibido: ¡Hola, RabbitMQ!`

---

In this example also persist messages when I reboot RabbitMQ. And the consumer should confirm the receive of the message.