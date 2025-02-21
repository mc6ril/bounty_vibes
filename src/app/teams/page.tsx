import Link from "next/link";

const TeamsPage = () => {
  const teams = ["JMK", "CLS", "Reva","Aphra","Leia","GLAT","JML","LV","Rey","SK","UFU","SLKR"];

  return (
    <div>
      <h1>Liste des équipes</h1>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team}>
              <Link href={`/teams/${team}`}>{team}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamsPage;
