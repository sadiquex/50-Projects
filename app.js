links = document.querySelectorAll('.project');
firstLink = document.getElementById('first');

links.forEach((link) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('class', 'project');
});
