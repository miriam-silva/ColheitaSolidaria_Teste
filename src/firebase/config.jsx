import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWlh0m_CxDx9sGoARkmM68EIdsrRC8Fog",
  authDomain: "colheitasolidaria-teste2.firebaseapp.com",
  projectId: "colheitasolidaria-teste2",
  storageBucket: "colheitasolidaria-teste2.appspot.com", 
  messagingSenderId: "138444161193",
  appId: "1:138444161193:web:94a9b4ba53111821c269b8",
  measurementId: "G-6PJZXMZMVS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcVCQgrAAAAAPu1OR1xcHMgqiv8bYCBh8WmVUzr"),
  isTokenAutoRefreshEnabled: true, 
});

const db = getFirestore(app); 

const checkAppCheckToken = async () => {
  try {
    const tokenResponse = await getToken(appCheck, true);
    console.log("Token App Check:", tokenResponse.token);
  } catch (error) {
    console.error("Erro ao obter token do App Check:", error);
  }
};

checkAppCheckToken();

export { app, appCheck, analytics, db };
