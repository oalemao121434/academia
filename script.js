<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDwh6VCNQP10sOJlqz1KbbMF11eH19uk_c",
    authDomain: "projeto-de-back-end.firebaseapp.com",
    projectId: "projeto-de-back-end",
    storageBucket: "projeto-de-back-end.firebasestorage.app",
    messagingSenderId: "1057857938534",
    appId: "1:1057857938534:web:5f50f00b06169276b2b9a7",
    measurementId: "G-TNEZ549NM6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
