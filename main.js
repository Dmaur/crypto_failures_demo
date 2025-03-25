const hardcodedKey = "supersecretKey"; // (BAD practice!)

const rainbowTable = {
    "2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b": "secret",
    "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8": "password",
    "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92": "123456",
    "fd0bf83bea46c356d692dfbef382b65d5d15d3b8cb0ab93a5a6f834b040fd3ee": "smelly",
    "5723360ef11043a879520412e9ad897e0ebcb99cc820ec363bfecc9d751a1a99": "god",
    "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9": "admin123",
    "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5": "qwerty",
    "f0e4c2f76c58916ec258f246851bea091d14d4247a2fc3e18694461b1816e13b": "asdf",
    "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f": "password123",

};

function generateHash(password) {
    return CryptoJS.SHA256(password).toString();
}
function generateSalt() {
    return CryptoJS.lib.WordArray.random(16).toString();
}
function generateSaltedHash(password, salt) {
    return CryptoJS.SHA256(salt + password).toString();
}

function encryptMessage(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}
function decryptMessage(encrypted, key) {
    return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
}


function storePlain() {
    const password = document.getElementById('plainPassword').value;
    document.getElementById('plainOutput').innerHTML =
        `Stored password: ${password}`;
}

function storeHashed() {
    const password = document.getElementById('hashedPassword').value;
    const hash = generateHash(password);
    document.getElementById('hashedOutput').innerHTML = `Stored hash: ${hash}`;
    document.getElementById('hashToCrack').innerHTML = `Hash to crack: ${hash}`;

}



function crackHash() {
    const hash = document.getElementById('hashedOutput').innerText.split(': ')[1];
    const resultDiv = document.getElementById('crackResult');


    const found = Object.entries(rainbowTable).find(([key]) => key === hash);

    if (found) {
        resultDiv.innerHTML = `<span class="cracked">CRACKED! Password: "${found[1]}"</span>`;
    } else {
        resultDiv.innerHTML = '<span class="secure">(Not found in rainbow table - but might be crackable with more resources)</span>';
    }
}


// With salting
function storeSaltedHash() {

    const password = document.getElementById('saltedPassword').value;

    // Generate a random salt using the generateSalt function
    const salt = generateSalt();

    // Concatenate the salt and password, then hash the result using SHA-256
    const SaltedHash = generateSaltedHash(password, salt);

    // Display the salt and hashed password in the element with id 'saltedOutput'
    document.getElementById('saltedOutput').innerHTML =
        `Salt 'n' Hashed: ${salt}`;
    document.getElementById('saltedToCrack').innerHTML = `salt crack: ${salt}<br>Hashed password: ${hash}`;
}

function encryptedMessage() {
    const message = document.getElementById('messageToEncrypt').value;

    // Encrypt using AES with a hardcoded key
    const encrypted = encryptMessage(message, hardcodedKey);

    document.getElementById('encryptedOutput').innerHTML = `Encrypted: ${encrypted}`;
}

function decryptedMessage() {
    const encrypted = document.getElementById('encryptedOutput').innerText.split(': ')[1];

    // Decrypt using AES with the same hardcoded key
    const decrypted = decryptMessage(encrypted, hardcodedKey)

    document.getElementById('decryptedOutput').innerHTML = `Decrypted: ${decrypted}`;
}



