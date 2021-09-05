/**
 * The ID of a unique Athens block
 */
type UID = string;

/**
 * A person interacting with Athens in a multiplayer context
 */
type Person = {
  personId: string;
  username: string;
  color: string;
}

/**
 *  A Person associated with a specific Athens block in a multiplayer context
*/
type PersonPresence = Person & {
  uid: UID;
}

/**
 * A knowledge graph
 */
type Database = {
  id: string;
  name: string;
  "is-remote": boolean;
}

type Synced = boolean;
