
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import Swal from "sweetalert2";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgpFJh1J5ohuVA-p38VrTa5mtzCXFoDM4",
    authDomain: "coder-ecommerce-ur.firebaseapp.com",
    projectId: "coder-ecommerce-ur",
    storageBucket: "coder-ecommerce-ur.firebasestorage.app",
    messagingSenderId: "595016891626",
    appId: "1:595016891626:web:1e0a15f5ed38f52dc56b93",
    measurementId: "G-1G7EDXVVZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

const db = getFirestore(app);


export const getItems = async () => {
    let result = [];
    const querySnapshot = await getDocs(collection(db, 'items'));
    querySnapshot.forEach(doc => {
        result.push(doc.data())
    });
    return result;
}
export const getItemsByCategory = async (categoryName) => {
    let result = [];
    const q = query(collection(db, 'items'), where("category", "==", categoryName))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
        result.push(doc.data())
    });
    return result;
}
export const getAllCategoryNames = async () => {
    let result = [];
    const querySnapshot = await getDocs(collection(db, 'categories'));
    querySnapshot.forEach(doc => {
        result.push(doc.data().name)
    });
    return result;
}
export const getItemByID = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
        return docSnapshot.data()
    }
}
export const savePurchase = async (purchase) => {
    const purchaseCollectionRef = collection(db, 'purchases');
    try {
        const docRef = await addDoc(purchaseCollectionRef, purchase)
        Swal.fire({
            title: 'Se guardo tu orden de compra',
            text: 'Id de compra: ' + docRef.id,
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    } catch (e) {
        alert('Algun error')
    }
}