const grid=document.querySelector(".game-grid");
const base="https://carloswinicius.github.io/";
const games={
  "merge-drop":{name:"Merge Drop",eyebrow:"EM DESTAQUE",description:"Solte blocos, faça fusões e construa seu maior número.",url:base+"merge-drop/",logo:base+"merge-drop/logo.svg",art:"merge-art"},
  "wita-wordless":{name:"Wita Wordless",eyebrow:"NOVO",description:"Descubra a palavra em seis tentativas e bata seu recorde.",url:base+"wita-wordless/",logo:base+"wita-wordless/logo.svg",art:"memory-art"},
  "wita-spelling-bee":{name:"Spelling Bee",eyebrow:"NOVO",description:"Forme palavras com sete letras e alcance a meta.",url:base+"wita-spelling-bee/",logo:base+"wita-spelling-bee/logo.svg",art:"neon-art"},
  "wita-clueless":{name:"Clueless",eyebrow:"NOVO",description:"Use pistas, elimine opções e descubra a resposta.",url:base+"wita-clueless/",logo:base+"wita-clueless/logo.svg",art:"neon-art"},
  "wita-more-less":{name:"More / Less",eyebrow:"NOVO",description:"Adivinhe o próximo número e construa sua sequência.",url:base+"wita-more-less/",logo:base+"wita-more-less/logo.svg",art:"neon-art"},
  "wita-tetris":{name:"Wita Tetris",eyebrow:"NOVO",description:"Encaixe peças, limpe linhas e bata seu recorde.",url:base+"wita-tetris/",logo:base+"wita-tetris/logo.svg",art:"neon-art"}
};
function card(game){const a=document.createElement("a");a.className="game-card featured";a.href=game.url;a.setAttribute("aria-label",`Jogar ${game.name}`);a.innerHTML=`<div class="card-art ${game.art}"><img src="${game.logo}" alt="Logo ${game.name}" loading="lazy"><span>→</span></div><div class="card-body"><div><p class="eyebrow">${game.eyebrow}</p><h3>${game.name}</h3><p>${game.description}</p></div><span class="play">JOGAR →</span></div>`;return a}
async function refreshGames(){try{const response=await fetch("https://api.github.com/users/CarlosWinicius/repos?per_page=100&sort=updated",{headers:{Accept:"application/vnd.github+json"}});if(!response.ok)throw new Error("GitHub indisponível");const repos=await response.json();repos.filter(repo=>repo.name.startsWith("wita-")&&!games[repo.name.toLowerCase()]).forEach(repo=>{const key=repo.name.toLowerCase();games[key]={name:repo.name.replace(/^wita-/i,"").replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase()),eyebrow:"NOVO",description:repo.description||"Novo jogo do Wita Game Hub.",url:base+repo.name+"/",logo:base+repo.name+"/logo.svg",art:"neon-art"}});grid.replaceChildren(...Object.values(games).map(card))}catch{grid.replaceChildren(...Object.values(games).map(card))}}
refreshGames();
