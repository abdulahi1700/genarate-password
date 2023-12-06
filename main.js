let paswordbox = document.getElementById('password');
const button = document.getElementById('btn');
const copy = document.getElementById('copy');
let length = 12;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@#$^&()_+~|}{[]></-=';
let allchars = uppercase + lowercase + numbers + symbols;
button.addEventListener('click', () => {
  let password = '';

  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  paswordbox.value = password;
});

copy.addEventListener('click', () => {
  paswordbox.select();
  document.execCommand('copy');
});
