# Angular Multi-Customer Application

This project is an Angular application designed to support multiple customers from a single codebase using parametric builds.

## Project Overview

The application features a core `HomeModule` and multiple "Customer Modules" (`c1`, `c2`, `c3`). The build system is configured to dynamically swap the routing configuration for the `/welcome` path based on the selected customer configuration.

## Project Structure

*   **`src/app/home`**: Contains the common Home module and component.
*   **`src/app/customer-[id]`**: Contains the specific implementation for each customer module.
    *   `customer-1`: Module for Customer 1
    *   `customer-2`: Module for Customer 2
    *   `customer-3`: Module for Customer 3
*   **`src/app/welcome-routes.ts`**: The base routing file for the `/welcome` path. Used as the default (can be empty).
*   **`src/app/welcome-routes.[id].ts`**: specific routing configuration files for each customer that lazy load the corresponding customer specific module.
*   **`angular.json`**: Configured with `fileReplacements` to swap `welcome-routes.ts` with the customer-specific version during build/serve.

## Build & Serve Commands

You can build and serve the application for a specific customer using the `--configuration` flag.

### Run Locally (Serve)

To run the application locally for a specific customer:

```bash
# For Customer 1
ng serve --configuration=c1

# For Customer 2
ng serve --configuration=c2

# For Customer 3
ng serve --configuration=c3
```

Once running, navigate to `http://localhost:4200/welcome` to see the customer-specific module loaded.

### Build via NPM

To build the application for deployment:

```bash
# Build for Customer 1
npm run build -- --configuration=c1

# Build for Customer 2
npm run build -- --configuration=c2

# Build for Customer 3
npm run build -- --configuration=c3
```

The build output will be located in the `dist/` directory.

## Adding a New Customer

1.  Generate the new customer module: `ng g m customer-N --routing` and component.
2.  Create a new route config file: `src/app/welcome-routes.cN.ts`.
3.  Add a new configuration entry in `angular.json` under `architect.build.configurations` with `fileReplacements` mapping the base route file to the new customer route file.
4.  Add a corresponding entry in `architect.serve.configurations`.
