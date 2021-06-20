const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
  .then(res => res.json())
  .catch(err => console.log(err))

  const markup = repos.map(
    repo => `<li><a href="${repo.html_url}">${repo.name}</li>`
  )
  .join('')

  const content = document.getElementById("recents");
  content.innerHTML = `<ul>${markup}</ul>`
}
  listRepos("xoneUpx")
