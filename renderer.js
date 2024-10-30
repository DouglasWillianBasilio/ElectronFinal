const organogramaDiv = document.getElementById('organograma');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(cargo => {
      const nodeElement = criarNode(cargo);
      organogramaDiv.appendChild(nodeElement);
    });
  });

function criarNode({ nome, cargo, descricao, subordinados }) {
  const node = document.createElement('div');
  node.classList.add('node');

  const header = document.createElement('div');
  header.classList.add('node-header');
  header.addEventListener('click', () => {
    subordinatesDiv.style.display = subordinatesDiv.style.display === 'none' ? 'block' : 'none';
  });

  const title = document.createElement('div');
  title.classList.add('node-title');
  title.textContent = `${nome} - ${cargo}`;

  const desc = document.createElement('div');
  desc.classList.add('node-description');
  desc.textContent = descricao;

  header.appendChild(title);
  node.appendChild(header);
  node.appendChild(desc);

  const subordinatesDiv = document.createElement('div');
  subordinatesDiv.classList.add('subordinates');

  subordinados.forEach(sub => {
    const subNode = criarNode(sub);
    subordinatesDiv.appendChild(subNode);
  });

  node.appendChild(subordinatesDiv);
  return node;
}
