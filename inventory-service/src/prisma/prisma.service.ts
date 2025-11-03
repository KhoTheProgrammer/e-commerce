import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Prisma Service for database operations
 * Extends PrismaClient and implements NestJS lifecycle hooks
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  }

  /**
   * Connect to database when module initializes
   */
  async onModuleInit() {
    await this.$connect();
    console.warn('✅ Database connected successfully');
  }

  /**
   * Disconnect from database when module is destroyed
   */
  async onModuleDestroy() {
    await this.$disconnect();
    console.warn('👋 Database disconnected');
  }

  /**
   * Enable soft deletes by default
   * This method is kept for future use
   */
  enableSoftDelete() {
    // Middleware implementation for soft deletes
    // Currently not active, but structure is ready for when needed
    return;
  }

  /**
   * Clean up resources
   */
  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('Cannot clean database in production');
    }

    const models = Reflect.ownKeys(this).filter((key) => key[0] !== '_' && key !== 'constructor');

    return Promise.all(
      models.map((modelKey) => {
        // Dynamic model access for cleanup
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (this as any)[modelKey].deleteMany();
      }),
    );
  }
}
