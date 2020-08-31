//firebase処理部分
const firebaseConfig = {
    apiKey: "AIzaSyBgZuKAeeqMp48VNfsaXF3yiznOpiFvivc",
    authDomain: "mais30-cv-skyzeek.firebaseapp.com",
    databaseURL: "https://mais30-cv-skyzeek.firebaseio.com",
    projectId: "mais30-cv-skyzeek",
    storageBucket: "mais30-cv-skyzeek.appspot.com",
    messagingSenderId: "1088732070940",
    appId: "1:1088732070940:web:bbef0bdc8229ba23910bd9",
    measurementId: "G-EQ869PZ870"
};

//新規登録処理
register.addEventListener('click', function (e) {
    var mailAddress = document.getElementById('mailAddress').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(mailAddress, password)
        .catch(function (error) {
            alert('登録できません（' + error.message + '）');
        });
});

//ログイン処理
login.addEventListener('click', function (e) {
    var mailAddress = document.getElementById('mailAddress').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(mailAddress, password)
        .catch(function (error) {
            alert('ログインできません（' + error.message + '）');
        });
});

//認証状態の確認
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        //ログイン状態
        alert("ログインに成功しました");
    } else {
        //ログアウト状態
    }
});