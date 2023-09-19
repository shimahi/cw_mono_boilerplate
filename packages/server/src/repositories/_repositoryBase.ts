import { drizzle } from 'drizzle-orm/d1'

export abstract class RepositoryBase {
  protected readonly drizzle

  constructor({ context }: DomainArgs) {
    this.drizzle = drizzle(context.env.DB)
  }
}
