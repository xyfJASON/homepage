(() => {
  const people = Object.freeze({
    "xihui-liu": {
      name: "Xihui Liu",
      url: "https://xh-liu.github.io/"
    },
    "zhenliang-he": {
      name: "Zhenliang He",
      url: "https://lynnho.github.io/"
    },
    "meina-kan": {
      name: "Meina Kan",
      url: "https://scholar.google.com/citations?user=4AKCKKEAAAAJ"
    },
    "shiguang-shan": {
      name: "Shiguang Shan",
      url: "https://scholar.google.com/citations?user=Vkzd7MIAAAAJ"
    },
    "xilin-chen": {
      name: "Xilin Chen",
      url: "https://scholar.google.com/citations?user=vVx2v20AAAAJ"
    },
    "wenjie-pei": {
      name: "Wenjie Pei",
      url: "https://wenjiepei.github.io/"
    },
    "guangming-lu": {
      name: "Guangming Lu",
      url: "https://scholar.google.com/citations?user=fhwB7UwAAAAJ"
    },
    "xin-feng": {
      name: "Xin Feng",
      url: "https://scholar.google.com/citations?user=dkfbz90AAAAJ"
    }
  });

  document.querySelectorAll("a[data-person]").forEach((link) => {
    const person = people[link.dataset.person];

    if (!person) {
      console.warn(`Unknown person key: ${link.dataset.person}`);
      return;
    }

    link.href = person.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    if (!link.textContent.trim()) {
      link.textContent = person.name;
    }
  });
})();
