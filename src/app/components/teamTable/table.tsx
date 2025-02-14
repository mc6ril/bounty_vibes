import Image from "next/image";
import React from "react";

type chsType = {
    name: string;
    image: string;
    relic: string;
};

export interface TeamTableProps {
    teamName: string;
    data: {
        characters: chsType[];
        sets: string[];
        primaryIcons: string[];
        primary: string[][];
        secondary: string[][];
        stats: string[][];
        infos: string;
    };
}

const TeamModsTable: React.FC<TeamTableProps> = ({ teamName, data }) => {
    return (
        <div style={{ padding: "2%" }}>
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>TEAM {teamName.toUpperCase()}</h2>
            <table border={1} style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Bounty Vibes</th>
                        <td></td>
                        {data.characters.map((char, index) => (
                            <th key={index}>
                                {char.image && <Image src={char.image} alt={char.name} width="50" height="50" unoptimized={true} />}
                                <br />
                                {char.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>RELIC</strong>
                        </td>
                        <td></td>
                        {data.characters.map((char, index) => (
                            <td key={index}>{char.relic}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>
                            <strong>SETS</strong>
                        </td>
                        <td></td>
                        {data.sets.map((set, index) => (
                            <td key={index}>{set}</td>
                        ))}
                    </tr>
                    <tr>
                        <td rowSpan={data.primary.length + 1}>
                            <strong>PRIMARY</strong>
                        </td>
                    </tr>
                    {data.primary.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{data.primaryIcons[rowIndex] && <Image src={data.primaryIcons[rowIndex]} alt="Mod Icon" width={30} height={30} />}</td>
                            {row.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td rowSpan={data.secondary.length + 1}>
                            <strong>SECONDARY</strong>
                        </td>
                        <td rowSpan={data.secondary.length + 2}></td>
                    </tr>
                    {data.secondary.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td rowSpan={data.stats.length + 1}>
                            <strong>STATS</strong>
                        </td>
                    </tr>
                    {data.stats.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>
                                <strong>{row[0]}</strong>
                            </td>
                            {row.slice(1).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <strong>INFOS</strong>
                        </td>
                        <td colSpan={data.characters.length + 1}>{data.infos}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default TeamModsTable;
