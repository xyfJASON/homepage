const publicationDetailTriggers = document.querySelectorAll(".publication-detail-trigger");

publicationDetailTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    const shouldOpen = trigger.getAttribute("aria-expanded") === "false";

    publicationDetailTriggers.forEach((item) => item.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".publication-detail-panel").forEach((item) => {
      item.hidden = true;
    });

    if (shouldOpen) {
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }
  });
});
