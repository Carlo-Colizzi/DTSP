<center>
  <h1><strong>Decentralized Threat Sharing Platform</strong></h1>
</center>

<center>
<i>Repo metadata</i>

  <a href="https://github.com/Carlo-Colizzi/NetGun/issues"><img src="https://img.shields.io/github/issues/MyCr4ck/NetGun_Classe03" alt="issues - NetGun_Classe03"></a>
  <a href="https://github.com/Carlo-Colizzi/NetGun/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-GNU_GPLv3-purple" alt="License"></a>

</center>

## Introduction
DTSP stands for Decentralized Threat Sharing Platform. It aims to create an independent space for sharing global threats and avoiding national censorship through blockchain technology. DTSP merges the VirusTotal Malware Analysis Engine with Ethereum Blockchain technology.

Users can access this platform through a browser and Web3. A web page allows users to upload files, analyze them for threats, and record the analysis results on the blockchain.

## Why is a DTSP necessary?
A Decentralized Threat Sharing Platform lets to obtain several goals that are impossible to reach with the actual centralized technologies:
<ul>
  <li> Neutrality and Independence </li>
  <li> Transparency </li>
  <li> International Collaboration </li>
  <li> Resilience Against Censorship </li>
  <li> Improving Global Security </li>
</ul>

## Main Page DTSP
<div align="center">
  <img src="https://github.com/Carlo-Colizzi/DTSP/blob/main/Documentation%20and%20Resources/Images/main_page.png">
</div>

## Malware Analysis Example
<div align="center">
  <img src="https://github.com/Carlo-Colizzi/DTSP/blob/main/Documentation%20and%20Resources/Images/scan_example.png">
</div>

## DTSP Architecture
<div align="center">
  <img src="https://github.com/Carlo-Colizzi/DTSP/blob/main/Documentation%20and%20Resources/Images/DTSP_architecture.jpg">
</div>

## Installation
```bash
# DTSP and dependences
git clone https://github.com/Carlo-Colizzi/DTSP
cd NetGun
pip install -r requirements.txt

# Node.js
sudo apt update
sudo apt install nodejs

# npm
sudo apt install npm

# Truffle 
npm install -g truffle

# Ganahce
# Install it from the official site
# https://archive.trufflesuite.com/ganache/

```


## Configure
```bash

# Start Ganache
./Ganache.AppImage

# Load the Solidity Smart Contract on the Ganache Blockchain
cd ./DTSP/SmartContract
truffle migrate

# Setup DTSP Webserver
#[1] Open with an editor ./DTSP/WebServer/virustotalScan.py
#[2] Add your Virustotal API KEY in the API_KEY variable
#[3] Open with an editor ./DTSP/WebServer/templates/template.html
#[4] Add the URL of Ganache Instance (row 110)
#[5] Add the contract address given to the Smart Contract after the loading (row 111)
#[6] Start the WebServer
Python3 ./DTSP/WebServer/DTSP.py

# Setup your browser
#[1] Add MetaMask Extension to your browser
#[2] Login
#[3] Add an account present in Ganache 

# Now you can use DTSP!!
# Connect to the Web Server and start to use it
```

