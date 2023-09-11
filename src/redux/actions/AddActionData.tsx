import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { addingToDoListData } from "../reducers/addDataReducer";

export const gettingDataFromFirebaseStore =
  () => async (dispatch: Function) => {
    let dataArray: Array<Object> = [];
    try {
      const dataSnapShot = await getDocs(collection(db, "to-do-list"));
      dataSnapShot.forEach((doc) => {
        let snapVariable = doc.data();
        snapVariable.id = doc.id;
        dataArray = [...dataArray, snapVariable];
      });
      // console.log(dataArray.sort());
      dispatch(addingToDoListData(dataArray));
    } catch (error) {
      console.log("Error To Getting Data From FireStore:->", error);
    }
  };

export const AddDataToFirebase =
  (text: string) => async (dispatch: Function) => {
    try {
      if (text) {
        const docRef = await addDoc(collection(db, "to-do-list"), {
          completed: false,
          value: text,
        });
        console.log("Adding Data to Firebase SUCCESSFULLY With ID:", docRef.id);
      } else {
        console.log("No text Found to add");
      }
    } catch (e) {
      console.log("Error adding Data", e);
    }
    dispatch(gettingDataFromFirebaseStore());
  };

export const deleteDataFromFirebase =
  (id: string) => async (dispatch: Function) => {
    await deleteDoc(doc(db, "to-do-list", id));
    dispatch(gettingDataFromFirebaseStore());
  };

export const updateDataFromFirebase =
  (id: string, com: boolean) => async (dispatch: Function) => {
    await updateDoc(doc(db, "to-do-list", id), {
      completed: com,
    });
    dispatch(gettingDataFromFirebaseStore());
  };
