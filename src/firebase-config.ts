const config = {
  apiKey: "AIzaSyB-bGtj-T139MrZjsGaR6ufi95yoT3iKV8",
  authDomain: "nli-database.firebaseapp.com",
  projectId: "nli-database",
  storageBucket: "nli-database.appspot.com",
  messagingSenderId: "1082779814732",
  appId: "1:1082779814732:web:6eae43fc7c56a1eb235de9",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
