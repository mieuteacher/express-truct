## Pisma Migration

## Part 0: create chema.prisma: https://www.prisma.io/docs/concepts/database-connectors/mysql

Step 1: Go to src folder

Step 2: Tạo file schema.prisma

Step 3: xem cách config ở link trên và tạo.

## Part 1: Sych Database

## Link document: https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate/troubleshooting-development

## Reset Database MySQL Đã tồn tại

```bash
    npx prisma migrate reset
```

## Đọc file shcema.prisma để tạo ra database và các table mysql (đồng thời ghi chép lịch sử vào migrations)

```bash
    npx prisma migrate dev
```

## Kéo những thay đổi về cấu trúc database trên máy về file prisma

```bash
    npx prisma db pull
```

## Lưu những thay đổi vào version migration hiện tại

```bash
    npx prisma migrate dev --name introspected_change
```

## Part 3: Tạo liên kết các tabel https://www.prisma.io/docs/concepts/components/prisma-schema/relations

## Prisma Client https://www.prisma.io/docs/concepts/components/prisma-client

Step 1: install prisma client: npm install @prisma/client

Step 2: add below code to src/schema.prisma file

generator client {
  provider = "prisma-client-js"
}

Step 3: move to src folder 

```bash
    npx prisma generate
```

Step 4: khi nhận được thông báo thành công thì tới model gọi prisma client

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
