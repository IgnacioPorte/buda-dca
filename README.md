# Buda DCA simulator

## Requisitos

Antes de comenzar, asegúrate de cumplir con uno de los siguientes requisitos:

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

3. 1. Buildea la imagen de Docker:
   ```bash
   docker build . -t dca
   ```

4. 1. Corre el contenedor de Docker:
   ```bash
    docker run -p 8080:8080 dca
    ```
### Local:

3. 2. Instala las dependencias:
    ```bash
    bun install
    ```
4. 2. Corre el proyecto:
    ```bash
    bun run dev
    ```
5. Abre tu navegador y navega a `http://localhost:8080`.  

## Tests

- Para correr los tests, ejecuta el siguiente comando:
    ```bash
    bun run test
    ```

## Consideraciones
- La aplicación tiene todos los requerimientos y deseables específicados
- Los tests se corren con github actions