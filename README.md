# Cellebrite Phone Management System

## An example of a full-stack app

[Nx](https://nx.dev/) was used for bootstrapping the workspace.

Tech stack:

- backend: NestJS, TyepeORM, Postgres
- frontend: NextJS, Material-UI

How to start locally:
Run the following commands inside the project root:

- `yarn`
- `docker-compose up`
- `yarn start:full`

Other commands:

- run the Storybook: `yarn start:storybook`
- run the tests: `yarn run test:ui`

Postman collection exported in `postman_collection.json`

## Directory structure

    .
    ├── apps
    │   ├── backend # our NestJS app
    │   │   └── src
    │   │       ├── app
    │   │       │   ├── common
    │   │       │   └── modules
    │   │       │       ├── database # module responsible for DB connection
    │   │       │       └── phones # our Phones API
    │   │       ├── assets
    │   │       └── environments
    │   └── frontend # our NextJS app
    │       ├── pages # used for routing
    │       │   └── phone
    │       ├── public
    │       ├── specs
    │       └── utils
    ├── dist
    │   └── apps
    │       ├── backend
    │       │   └── assets
    │       └── frontend
    │           └── public
    └── libs
        ├── data # shared code between packages, like interfaces or the muiTheme
        │   └── src
        │       └── lib
        └── ui # our UI components
            └── src
                └── lib
                    ├── app-layout
                    ├── index-page
                    ├── phone-details
                    ├── phone-page
                    └── phone-table


---

TODOs:

- [ ] move Axios calls to an ApiService
- [ ] wrap API calls with [SWR](https://swr.vercel.app/)
- [ ] code review
- [ ] API unit tests
- [ ] FE E2E tests
- [ ] fix building the apps for production environment
- [ ] Dockerfiles for FE & BE
- [ ] Pulumi script for provisioning a Digitalocean server
- [ ] CI/CD pipe with Gitlab: lint, test, build, deploy, e2e test
