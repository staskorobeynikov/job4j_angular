export class User {
  constructor(
    public login: string,
    public password: string,
    public city?: string,
    public subscribe?: boolean
  ) {
  }
}
