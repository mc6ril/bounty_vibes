export class Character {
  constructor(
    public readonly name: string,
    public readonly tag: string[],
    public readonly image?: string,
    public readonly relic?: string,
  ) {}

  hasTag(tag: string): boolean {
    return this.tag.some((t) => t.toLowerCase() === tag.toLowerCase());
  }

  matchesSearch(search: string): boolean {
    const searchLower = search.toLowerCase();
    return (
      this.name.toLowerCase().includes(searchLower) || this.tag.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }
}
