on("onResourceStart", (resource) => {
  console.log(`[^6SERVER^7]: [^2${resource}^7] started!`);
});

onNet("onClientFeedback", (feedback) => {
  console.log(feedback);
});
