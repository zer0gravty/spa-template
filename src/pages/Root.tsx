import { useEffect } from "react";
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  redirect,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { IContact, createContact, getContacts } from "../contacts";

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts: IContact[] = await getContacts(q || "");
  return { contacts, q };
}

function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const submit = useSubmit();

  const isSearching = navigation.location && new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    (document.getElementById("q")! as HTMLInputElement).value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1 role="button" onClick={() => navigate("/")}>
          Home
        </h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              className={isSearching ? 'searching' : ''}
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(e) => {
                const isFirstSearch = q === null;
                submit(e.currentTarget.form, { replace: !isFirstSearch });
              }
            }
            />
            <div id="search-spinner" aria-hidden hidden={!isSearching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: IContact) => (
                <li key={contact.id}>
                  <NavLink
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                    to={`contacts/${contact.id}`}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Root;
