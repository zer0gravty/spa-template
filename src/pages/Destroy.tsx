import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export default async function action({ params }) {
    const isDestroyed = await deleteContact(params?.contactId);
    if (!isDestroyed) throw new Error();
    return redirect('/');
}
