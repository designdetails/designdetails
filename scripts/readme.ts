import supporters from'../config/supporters'

let str = ''

for (let s of supporters) {
  str += `- ${s.name}${s.twitterUsername ? ` [@${s.twitterUsername}](https://twitter.com/${s.twitterUsername})` : ''}\n`
}

console.log(str)