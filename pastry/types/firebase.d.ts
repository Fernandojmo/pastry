declare module 'firebase/app' {
  const initializeApp: any;
  const getApps: any;
  export { initializeApp, getApps };
}

declare module 'firebase/firestore' {
  export const getFirestore: any;
  export const collection: any;
  export const getDocs: any;
  export const doc: any;
  export const getDoc: any;
}
