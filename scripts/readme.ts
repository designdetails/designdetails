import supporters from '../src/config/supporters';

let str = '';

for (const s of supporters) {
  str += `- ${s.name}${
    s.twitterUsername
      ? ` [@${s.twitterUsername}](https://twitter.com/${s.twitterUsername})`
      : ''
  }\n`;
}

console.log(str);
