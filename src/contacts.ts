import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
import sortBy from 'sort-by';

export interface IContact {
  id: string;
  first?: string;
  last?: string;
  createdAt: number;
  favorite?: boolean;
}

async function fakeNetwork(key?: string): Promise<void> {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key || '']) {
    return;
  }

  fakeCache[key || ''] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

let fakeCache: { [key: string]: boolean } = {};

export async function getContacts(query?: string): Promise<IContact[]> {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: IContact[] = await localforage.getItem('contacts') || [];

  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] });
  }
  return contacts.sort(sortBy('last', 'createdAt'));
}

export async function createContact(): Promise<IContact> {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact: IContact = { id, createdAt: Date.now() };
  const contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string): Promise<IContact | null> {
  await fakeNetwork(`contact:${id}`);
  const contacts: IContact[] = await localforage.getItem('contacts') || [];
  const contact = contacts.find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(
  id: string,
  updates: Partial<IContact>
): Promise<IContact> {
  await fakeNetwork();
  const  contacts: IContact[] = await localforage.getItem('contacts') || [];
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error('No contact found for ' + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string): Promise<boolean> {
  const contacts: IContact[] = await localforage.getItem('contacts') || [];
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: IContact[]): Promise<IContact[]> {
  return localforage.setItem('contacts', contacts);
}
