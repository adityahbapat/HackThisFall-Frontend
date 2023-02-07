## Installation
npm i --legacy-peer-deps

## Running
npm run serve


Add project truffle-config.js to ganache

truffle init
truffle console
-> compile (conteacts shown in ganache)
-> .exit

Create migration file
deploy -reset (imp)

clear ganache folder in App Data folder in "Aditya Bapat" (user folder in windows) if ganache does not work after wifi change

truffle migrate -reset (to deploy contracts)


# Important Points to deploy contract 

Install truffle globally

```
npm install truffle --force -g
```
Code to start truffle after installation

```
./node_modules/.bin/truffle init 

or

truffle init
```

After successfull init, deploy the contract in console

```
truffle console
-> compile (conteacts shown in ganache)
-> .exit

or 

./node_modules/.bin/truffle init 
-> compile
->.exit
```

To deploy the contract - 
```

truffle migrate -reset
or 
./node_modules/.bin/truffle migrate -reset