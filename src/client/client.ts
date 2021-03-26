on("onClientResourceStart", (resource) => {
  emitNet("onClientFeedback", `[^9CLIENT^7]: [^2${resource}^7] started!`);
});
