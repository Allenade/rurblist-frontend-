# Rurblist Frontend Architecture

This directory is the target home for reusable application code. Next.js route files can stay in `app/`, while feature code and shared infrastructure should move here in small, verified batches.

## Folders

- `features/`: domain-specific code grouped by product area, such as auth, properties, agents, payments, tours, verification, escrow, users, comments, and plans.
- `features/agents/`: agent-specific hooks, services, models, and stores.
- `features/auth/`: auth-specific hooks, services, models, and stores.
- `features/comments/`: comment-specific hooks, services, and models.
- `features/payments/`: payment-specific hooks, services, and models.
- `features/plans/`: verification/escrow plan hooks, services, and models.
- `features/properties/`: property-specific hooks, services, models, and utilities.
- `features/tours/`: tour-specific hooks, services, and models.
- `features/users/`: user-specific hooks, services, and models.
- `features/verification/`: verification-specific hooks, services, and models.
- `shared/api/`: low-level request/response primitives used by feature services.
- `shared/config/`: route tables, API links, and app-level constants.
- `shared/hooks/`: generic hooks that are not tied to one feature.
- `shared/react-query/`: query client setup and shared query helpers.
- `shared/utils/`: generic utility functions used across features.
- `shared/toast/`: app-level toast provider.
- `shared/models/`: generic shared data shapes, such as image, location, and pagination cursor models.

## Naming

- Components: `kebab-case.tsx` filenames with PascalCase exports.
- Hooks: `use-feature-action.ts`.
- API modules: `domain-service.ts` or `domain-service-client.ts` until each feature is migrated.
- Types/models: `domain-model.ts` or `domain-types.ts`.
- Avoid abbreviations like `cm`, `m`, or `c` in folder names.
