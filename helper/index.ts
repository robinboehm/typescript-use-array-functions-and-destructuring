/** @doc
 * [hostname, port, protcol]
 */
export function getConnectionData(): [string, number, string] {
  return ["localhost", 4000, "https"];
}

/** @doc
 * [hostname, port, protcol]
 */
export function getUsers(): Array<{name: string}> {
  return [
    {name: 'Robin'},
    {name: 'Pawel'},
    {name: 'Wojtek'},
    {name: 'Oleg'},
    {name: 'Dave'},
  ];
}

