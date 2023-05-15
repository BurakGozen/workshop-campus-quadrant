const { app, title } = init();

title.createNumber(som, (title) => `De som is ${title}`);
title.createNumber(verschil, (title) => `Het verschil is ${title}`);
title.createNumber(product, (title) => `Het product is ${title}`);
title.createNumber(quotient, (title) => `Het quotient is ${title}`);
title.render();
