# Team Management Guide

## Adding a New Team

To add a new team to the system, follow these steps:

1. **Update the Teams Configuration**

   - Open `src/data/teamNames/index.ts`
   - Add your new team to the `teams` object with its members
   - Add the team to the `AVAILABLE_TEAMS` array with its ID and display name

2. **Create a Team File**
   - Create a new file in the `src/data/teamNames` directory
   - Name the file exactly the same as the ID you used in `AVAILABLE_TEAMS`
   - The file should contain the team's specific configuration and data

### Example

Let's say you want to add a new team called "Jedi Council":

1. In `src/data/teamNames/index.ts`:

```typescript
export const teams: Record<string, string[]> = {
  // ... existing teams ...
  jediCouncil: ["yoda", "maceWindu", "kiAdiMundi", "ploKoon", "saeseeTiin"],
};

export const AVAILABLE_TEAMS = [
  // ... existing teams ...
  { id: "jediCouncil", name: "Jedi Council Team" },
];
```

2. Create a new file `src/data/teamNames/jediCouncil.ts` with the team's specific configuration.

### Important Notes

- Team IDs should be lowercase and use camelCase for multiple words
- Team names in `AVAILABLE_TEAMS` should be descriptive and include "Team" at the end
- Make sure to maintain consistency in the format of team member names
- All team members should be properly defined in the system before being added to a team
