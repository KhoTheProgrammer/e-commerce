import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductModuleService } from './product-module.service';
import { CreateProductModuleDto } from './dto/create-product-module.dto';
import { UpdateProductModuleDto } from './dto/update-product-module.dto';

@Controller('products')
export class ProductModuleController {
  constructor(private readonly productModuleService: ProductModuleService) {}

  @Post()
  create(@Body() createProductModuleDto: CreateProductModuleDto) {
    return this.productModuleService.create(createProductModuleDto);
  }

  @Get()
  findAll() {
    return this.productModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productModuleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductModuleDto: UpdateProductModuleDto) {
    return this.productModuleService.update(id, updateProductModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productModuleService.remove(id);
  }
}
