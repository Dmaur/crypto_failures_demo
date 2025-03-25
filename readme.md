# 📌 Crypto Failures Demo Challenge

## 📝 Introduction
In the demo, we explored **hashing and salting** using the **SHA-256** algorithm. While this approach provides a level of security, it is not the most robust method available.

## 🎯 Task
Your objective is to investigate the **PBKDF2 (Password-Based Key Derivation Function 2)** algorithm and understand why it is superior to **SHA-256** for password hashing.

## ✅ Requirements
To earn full marks, complete both of the following tasks:

- **🔍 Research Task (50% of the mark)**
  - Write a short explanation about why **PBKDF2** is better than **SHA-256**.

- **💻 Coding Task (50% of the mark)**
  - Modify the function in `main.js` to use **PBKDF2** instead of **SHA-256**.

### 🔧 Original Function (to be modified):
```javascript
function generateSaltedHash(password, salt) {
    return CryptoJS.SHA256(salt + password).toString(CryptoJS.enc.Hex);
}
```

## 📩 Submission
Send the following via **Teams** or **School Email**:
1. A **short explanation** of PBKDF2’s advantages.
2. A **screenshot of the modified function**.
3. A **screenshot of the output** in the *"with salting"* section.

---
**Happy Hashing! 🚀**

