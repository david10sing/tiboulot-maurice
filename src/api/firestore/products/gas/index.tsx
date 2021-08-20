import firebase from 'firebase/app';
import { firestore } from '../../../firebase';

interface GasDocumentSnapshot extends firebase.firestore.QueryDocumentSnapshot {
  color: string;
  cost: firebase.firestore.DocumentReference;
  weight: number;
  imgUrl: string;
  price: firebase.firestore.DocumentReference;
}

type Gas = {
  color: string;
  cost: number;
  weight: number;
  imgUrl: string;
  price: number;
};

const gasConverter = {
  toFirestore(gas: any): firebase.firestore.DocumentData {
    return {
      color: gas.color,
    };
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot
  ): GasDocumentSnapshot {
    return snapshot.data() as GasDocumentSnapshot;
  },
};

const list = async (): Promise<Gas[]> => {
  const gasArray: Gas[] = [];

  await firestore
    .collectionGroup('gas')
    .withConverter(gasConverter)
    .get()
    .then(async (querySnapshot) => {
      await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const {
            color,
            cost: costRef,
            imgUrl,
            price: priceRef,
            weight,
          } = doc.data();

          const cost = await costRef
            .get()
            .then((costSnap: any) => costSnap.data().amount)
            .catch(() => 0);
          const price = await priceRef
            .get()
            .then((priceSnap: any) => priceSnap.data().amount)
            .catch(() => 0);
          return {
            color,
            cost,
            imgUrl,
            price,
            weight,
          };
        })
      ).then((values) => {
        gasArray.push(...values);
      });
    });

  return gasArray;
};

const GasAPI = {
  list,
};

export default GasAPI;
