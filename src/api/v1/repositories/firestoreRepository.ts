import { db } from "../../../config/firebase";

// Create document
export const createDocument = async (collection: string, data: any) => {
  try {
    const docRef = await db.collection(collection).add(data);
    return docRef.id;
  } catch (error: any) {
    throw new Error(`Error creating document: ${error.message}`);
  }
};

// Get all documents
export const getDocuments = async (collection: string) => {
  try {
    return await db.collection(collection).get();
  } catch (error: any) {
    throw new Error(`Error fetching documents: ${error.message}`);
  }
};

// Get document by ID
export const getDocumentById = async (collection: string, id: string) => {
  try {
    const doc = await db.collection(collection).doc(id).get();
    return doc.exists ? doc : null;
  } catch (error: any) {
    throw new Error(`Error fetching document: ${error.message}`);
  }
};

// Update document
export const updateDocument = async (
  collection: string,
  id: string,
  data: any
) => {
  try {
    await db.collection(collection).doc(id).update(data);
  } catch (error: any) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

// Delete document
export const deleteDocument = async (collection: string, id: string) => {
  try {
    await db.collection(collection).doc(id).delete();
  } catch (error: any) {
    throw new Error(`Error deleting document: ${error.message}`);
  }
};

// Get documents by field (for filtering / booking validation)
export const getDocumentsByField = async (
  collection: string,
  field: string,
  value: any
) => {
  try {
    const snapshot = await db
      .collection(collection)
      .where(field, "==", value)
      .get();

    return snapshot;
  } catch (error: any) {
    throw new Error(`Error filtering documents: ${error.message}`);
  }
};