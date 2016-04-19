var context = require.context('./webpack', true, /_spec\.(js|jsx)$/);
context.keys().forEach(context);
