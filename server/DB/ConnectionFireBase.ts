import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { } from 'firebase/auth'

class ConnectionFireBase {

    private app;
    private db;
    private credencials = {
        apiKey: "AIzaSyAUwRnGVsIzvY0e2f8B8sAplKHNBUOF5HY",
        authDomain: "marvelgame-c0296.firebaseapp.com",
        projectId: "marvelgame-c0296",
        storageBucket: "marvelgame-c0296.appspot.com",
        messagingSenderId: "693061701489",
        appId: "1:693061701489:web:0143c9c5e036b98e6070d0",
        measurementId: "G-SV0ZE0XKBL"
    };

    public constructor() {        
        this.app = initializeApp(this.credencials);
        this.db = getFirestore(this.app);
    }

    public async getFireBaseCall(){
        const itemColl = collection(this.db,'user');
        const getUser = await (await getDocs(itemColl)).docs.map(doc => doc.data());
        return getUser;
    }
}

export default ConnectionFireBase