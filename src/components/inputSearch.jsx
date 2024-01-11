import { Search } from "react-feather";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const InputSearch = ({ showSearch }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();

  const symbol = `!#$%&^*()@?/|[]~;{}<>""`;
  useEffect(() => {
    showSearch ? inputRef.current.focus() : "";
    // set type 
    setType(location.pathname.split("/")[1]);
    // filter query
    if (symbol.split("").includes(query.split("")[query.length - 1])) {
      filter(query);
    }
  }, [query, showSearch]);

  function keyUp(e) {
    if (e.key == "Enter") {
      handleInput(e);
    }
  }

  function filter(q) {
    const newQ = q.split("");
    newQ.pop();
    setQuery(newQ.join(""));
  }

  function handleInput(e) {
    e.preventDefault();
    if (!query) return;
    const slug = query.split(" ").join("-");
    setQuery("");
    navigate(`/${type}/search/${slug}`);
  }

  return (
    <>
      {type ? (
        <div className="flex items-center bg-slate-900 gap-2 px-4 py-2 rounded-md">
          <input
            ref={inputRef}
            type="text"
            placeholder={`search ${
              type == "quotes" ? type + " by keyword" : type
            }... 
            `}
            autoFocus
            onKeyPress={(e) => keyUp(e)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none text-lg text-white bg-transparent"
          />
          <Link onClick={(e) => handleInput(e)} className=" cursor-pointer">
            <Search size={24} />
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default InputSearch;
