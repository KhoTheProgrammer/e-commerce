import { Injectable } from '@nestjs/common';
import { CreateProductModuleDto } from './dto/create-product-module.dto';
import { UpdateProductModuleDto } from './dto/update-product-module.dto';
import { PrismaService } from 'src/prisma';

@Injectable()
export class ProductModuleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductModuleDto: CreateProductModuleDto) {
    return 'This action adds a new productModule';
  }

  async findAll() {
    try {
      // Get all products from the database
      const products = await this.prisma.product.findMany();

      // Products not found
      if (!products) {
        return {
          data: [],
          message: 'Products not fetched successfully',
          status: 'failed',
        };
      }

      // Products found
      return {
        data: products,
        message: 'Products fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: [],
        message: 'An error occurred while fetching products',
        status: 'error',
      };
    }
  }

  async findOne(id: string) {
    try {
      // Get the product from the database
      const product = await this.prisma.product.findUnique({
        where: {
          id,
        },
      });

      // Product not found
      if (!product) {
        return {
          data: null,
          message: 'product not found',
          status: 'failed',
        };
      }

      // found in the database
      return {
        data: product,
        message: 'product fetched successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'An error occurred while fetching the product',
        status: 'error',
      };
    }
  }

  async update(id: string, updateProductModuleDto: UpdateProductModuleDto) {
    return `This action updates a #${id} productModule`;
  }

  async remove(id: string) {
    try {
      // Delete the product from the database
      const deletedProduct = await this.prisma.product.delete({
        where: {
          id,
        },
      });

      // Product not found
      if (!deletedProduct) {
        return {
          data: null,
          message: 'product not found',
          status: 'failed',
        };
      }

      // Successfully deleted
      return {
        data: deletedProduct,
        message: 'product deleted successfully',
        status: 'success',
      };
    } catch (error) {
      return {
        data: null,
        message: 'An error occurred while deleting the product',
        status: 'error',
      };
    }
  }
}
