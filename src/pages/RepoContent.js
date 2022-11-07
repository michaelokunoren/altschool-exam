import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RepoContent() {
  const [contents, setContents] = useState([]);
  const [users] = useState("michaelokunoren");

  const params = useParams();
  const name = params.name;

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(
        `https://api.github.com/repos/${users}/${name}/contents`
      );
      setContents(response.data);
      console.log(response.data);
    };
    fetchRepos();
  }, [users, name]);
  return (
    <div>
      <h3>{name}</h3>

      <div>
        {
            contents.map((content, index) => (
                <div key={index}>
                    <p>{content.name}</p>
                    <p>{content.size}</p>
                    <p>{content.type}</p>
                </div>
            ))
        }
      </div>

    </div>
  );
}

export default RepoContent;
