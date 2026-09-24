const publicationDetailTriggers = document.querySelectorAll(".publication-detail-trigger");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const collapsedPanelStyle = {
  height: "0px",
  marginTop: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  borderTopWidth: "0px",
  borderBottomWidth: "0px",
  opacity: 0,
};

function panelStyle(panel) {
  const style = getComputedStyle(panel);

  return {
    height: `${panel.getBoundingClientRect().height}px`,
    marginTop: style.marginTop,
    paddingTop: style.paddingTop,
    paddingBottom: style.paddingBottom,
    borderTopWidth: style.borderTopWidth,
    borderBottomWidth: style.borderBottomWidth,
    opacity: style.opacity,
  };
}

function setPanelOpen(panel, open) {
  const start = panel.hidden ? collapsedPanelStyle : panelStyle(panel);

  panel.getAnimations().forEach((animation) => animation.cancel());

  if (prefersReducedMotion.matches) {
    panel.hidden = !open;
    return;
  }

  if (open) panel.hidden = false;

  const end = open ? panelStyle(panel) : collapsedPanelStyle;

  const animation = panel.animate([start, end], {
    duration: 240,
    easing: "ease-in-out",
  });

  animation.onfinish = () => {
    panel.hidden = !open;
  };
}

publicationDetailTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const activeTrigger = document.querySelector('.publication-detail-trigger[aria-expanded="true"]');
    const shouldOpen = activeTrigger !== trigger;

    if (activeTrigger) {
      activeTrigger.setAttribute("aria-expanded", "false");
      setPanelOpen(document.getElementById(activeTrigger.getAttribute("aria-controls")), false);
    }

    if (shouldOpen) {
      trigger.setAttribute("aria-expanded", "true");
      setPanelOpen(document.getElementById(trigger.getAttribute("aria-controls")), true);
    }
  });
});
