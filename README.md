Étapes:

Git Clone

Ganache Start

Écrire contrat

Écrire JS

npm install

npm install lite-server

Ropsten metamask

Live net metamask


Étapes détaillées:

Ganache (réseau virtuel, local, permet de développer rapidement)

1. Télécharger git, node, ganache (pour mac ouvrir mac.zip pour yosemite, exe pour windows, dans les 2 cas faut cliquer sur le petit lien en bas, pas le gros boutton install)

2. git clone https://github.com/AkaashMukherjee/Workshop

3. npm init, npm install, npm install ethereum/web3.js --save 

4. Démarrer ganache

5. Brancher remix à Ganache (Web 3 Provider) (https://remix.ethereum.org)

6. Écrire contrat dans remix, assurez-vous que le contrat que vous déployez s'appelle Workshop, actualiser la page pour vérifier

7. Créer/écrire HTML/CSS

8. Créer/Écrire JS

9. Copier ABI de remix, coller dans JS

10. Copier id du contrat de remix coller dans JS


Ropsten (simule main network sans payer)

1.Télécharger metamask

2. npm install -g lite-server

3. lite-server (ouvrir dans chrome, c'est important!!)

4. sur remix se connecter au injected web3 through metamask

5. Créer compte sur metamask (si on voit pas le compte re-import le compte avec le pk)

6. Demander tokens sur Faucet (assure toi de request de faucet!!!)

7. Deployer smart contract

8. changer contract address en JS 


Main network

1. changer au main network dans metamask, 

2. deployer contract dans remix (injected web3)

3. changer contract address en JS
