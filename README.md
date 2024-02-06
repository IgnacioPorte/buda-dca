# Buda DCA simulator

## Requisitos

Antes de comenzar, asegúrate de cumplir con uno de los siguientes requisitos, según la forma en que quieras correr la aplicación:

- Bun
- Docker

## Configuración del Entorno

Para configurar el entorno, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/IgnacioPorte/buda-dca.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd buda-dca
    ```
### Dockerizado:

3. Buildea la imagen de Docker:
   ```bash
   docker build . -t dca
   ```

4. Corre el contenedor de Docker:
   ```bash
    docker run -p 8080:8080 dca
    ```
### Local:

3. Instala las dependencias:
    ```bash
    bun install
    ```
4. Corre el proyecto:
    ```bash
    bun run dev
    ``` 

\
5. Abre tu navegador y navega a `http://localhost:8080`.  

## Tests

- Para correr los tests, ejecuta el siguiente comando:
    ```bash
    bun run test
    ```

## Consideraciones
- La aplicación tiene todos los requerimientos y deseables especificados
- Los tests se corren con github actions
- La aplicación tiene pre-commit hooks con eslint y prettier
- La aplicación tiene pre-push hooks con tests
- La aplicación tiene CD con Netlify a [este link](https://budca.netlify.app/)
