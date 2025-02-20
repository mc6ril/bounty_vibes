import Link from "next/link";

const TeamsPage = () => {
  const teams = ["jmk", "cls", "reva","test"];

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
