document.querySelectorAll("[data-repo]").forEach(async (element) => {
  const response = await fetch(`https://api.github.com/repos/${element.dataset.repo}`);
  const repository = await response.json();
  element.textContent = `★ ${repository.stargazers_count.toLocaleString()}`;
});
