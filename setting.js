const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6281548514255'] // pakai nomor owner
global.ownernomer = "6281548514255" // pakai nomor owner
global.socialmedia = "IG: fahrul_mt" // ini ig buat di ownerjy
global.yutub = "YT: fahrul2951"// sama
global.lokasi = "Indonesia, Jawabarat, Bogor"//

global.packgename = "Sticker By" 
global.author = "Fahrul Gamteng\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6281548514255" 

global.title = 'SakuraMD'//Tittle reply 
global.body = 'Save Wa Own(Fahrul)' //body reply

global.welcome = true 
global.left = true


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})