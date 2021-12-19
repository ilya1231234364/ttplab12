import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function startApp() {
    const PORT = process.env.PORT || 5000

    const app = await NestFactory.create(AppModule, { cors: true })

    const config = new DocumentBuilder()
        .setTitle('nestjs-project')
        .setDescription('Документация')
        .setVersion('1.0.0')
        .addTag('Learn Nest')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`)
    })
}

startApp()  