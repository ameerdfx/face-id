process.on('uncaughtException', (e) => console.error('UNCAUGHT:', e));
process.on('unhandledRejection', (r) => console.error('UNHANDLED:', r));

require('dotenv').config();

console.log("CUSTOMER_BOT_TOKEN:", process.env.CUSTOMER_BOT_TOKEN ? "✅" : "❌");
console.log("MERCHANT_BOT_TOKEN:", process.env.MERCHANT_BOT_TOKEN ? "✅" : "❌");
console.log("DRIVER_BOT_TOKEN:",   process.env.DRIVER_BOT_TOKEN   ? "✅" : "❌");
console.log("ADMIN_ID:",           process.env.ADMIN_ID           ? "✅" : "❌");

require('./merchantBot');
require('./driverBot');
require('./customerBot');

console.log("🚀 All bots running together...");