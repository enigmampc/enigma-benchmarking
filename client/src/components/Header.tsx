import dynamic from "next/dynamic";
import Link from "next/link";
import SvgIcon from "./SvgIcon";
const MetaMask = dynamic(() => import("./MetaMask"));
import { isSSR } from "../utils";

interface IHeaderProps {
  path: string;
}

const Header = ({ path }: IHeaderProps) => {
  const isHomepage = path === "/";
  const isResult = path.startsWith("/result");
  const showMetamask = !isResult || (!isSSR && !isResult);

  return (
    <div className="header">
      <Link href={`/`} prefetch>
        <img
          src="/static/images/enigma_logo.png"
          alt="Enigma Logo"
          width="125"
          style={{ cursor: "pointer" }}
        />
      </Link>
      {showMetamask ? <MetaMask /> : null}
      <Link href={isHomepage ? `/upload` : `/`} prefetch>
        <div className="svgIconContainer">
          {isHomepage ? (
            <p>Add task dataset</p>
          ) : (
            <SvgIcon clickable={true} icon={isHomepage ? "add" : "clear"} />
          )}
        </div>
      </Link>

      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 90vw;
          height: 5.5vh;
          margin-bottom: 1vh;
          margin-top: 1vh;
          margin-left: 5vw;
          margin-right: 5vw;
        }

        .svgIconContainer {
          display: flex;
          justify-content: flex-end;
          width: 125px;
          cursor: pointer;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Header;
