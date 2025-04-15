import Image from "next/image";
import React from "react";
import "./table.css";
import { TeamTableProps, Character, Set } from "@core/domain/interfaces/TeamTableProps";

const TeamModsTable: React.FC<TeamTableProps> = ({ teamName, data }) => {
  return (
    <div style={{ padding: "2%" }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>TEAM {teamName.toUpperCase()}</h2>
      <table
        border={1}
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr>
            <th colSpan={2}>Bounty Vibes</th>
            {data.characters.map((char: Character, index: number) => (
              <th key={index}>
                {char.image && (
                  <Image
                    src={char.image}
                    alt={char.name}
                    width="50"
                    height="50"
                    unoptimized={true}
                  />
                )}
                <br />
                {char.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <strong>RELIC</strong>
            </td>
            {data.characters.map((char: Character, index: number) => (
              <td key={index}>{char.relic}</td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>SETS</strong>
            </td>
            {data.sets.map((set: Set, index: number) => (
              <td key={index}>
                {set.images && set.images.length > 0 ? (
                  set.images.map((img: string, imgIndex: number) => (
                    <Image
                      key={imgIndex}
                      src={img}
                      alt="Set Image"
                      width="35"
                      height="35"
                      unoptimized={true}
                      style={{ margin: "2px" }}
                    />
                  ))
                ) : (
                  <p>—</p> // Affiche un tiret si aucune image n'est disponible
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td
              rowSpan={data.primary.length + 1}
              colSpan={1}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}>
              <strong>PRIMARY</strong>
            </td>
          </tr>
          {data.primary.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              <td>
                {data.primaryIcons[rowIndex] && (
                  <Image
                    src={data.primaryIcons[rowIndex]}
                    alt="Mod Icon"
                    width={35}
                    height={35}
                  />
                )}
              </td>
              {row.map((value: string, index: number) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td
              rowSpan={data.secondary.length + 1}
              colSpan={1}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}>
              <strong>SECONDARY</strong>
            </td>
          </tr>
          {data.secondary.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              <td>{data.secondary[rowIndex] && <p>{rowIndex + 1}</p>}</td>
              {row.map((value: string, index: number) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td
              rowSpan={data.stats.length + 1}
              colSpan={1}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}>
              <strong>STATS</strong>
            </td>
          </tr>
          {data.stats.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              <td>
                <strong>{row[0]}</strong>
              </td>
              {row.slice(1).map((value: string, index: number) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <strong>INFOS</strong>
            </td>
            <td colSpan={data.characters.length + 2}>{data.infos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamModsTable;
