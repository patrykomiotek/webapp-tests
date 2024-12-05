import { z } from 'zod';

//   id: 'recdTT7H7XOCHodIW',
//   createdTime: '2024-12-04T13:25:49.000Z',
//   fields: {
//     name: 'trampki',
//     description: 'lorem ipsum',
//     price: 123,
//     created_at: '2024-12-04T13:25:49.000Z',
//     updated_at: '2024-12-04T13:27:57.000Z',
//   }

export const productSchema = z.object({
  id: z.string(),
  createdTime: z.string(),
  fields: z.object({
    // from edit / update form
    name: z.string(),
    description: z.string(),
    price: z.number(),
  }),
  created_at: z.string(),
  updated_at: z.string(),
});

export type ProductDto = z.infer<typeof productSchema>;

export const updateProduct = productSchema.pick({ fields: true });

// 1. option
// export type UpdateProductDto = ProductDto['fields'];
// export type CreateProductDto = UpdateProductDto;

// 2. option
export type UpdateProductDto = z.infer<typeof updateProduct>;
