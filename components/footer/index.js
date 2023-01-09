import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useWindowSize from "../../utils/hooks/useWindowSize";
import Accordion from "../accordion";
import AccordionDetails from "../accordion/accordion-details";
import AccordionSummary from "../accordion/accordion-summary";
import CategoryLoader from "../loader/category";
import { UpFooter } from "../UpFooter";

const Footer = () => {
  const { t: tl } = useTranslation();
  const settings = useSelector((state) => state.settings.data);
  const [idList, setIdList] = useState([]);
  const handleClick = (key) => {
    const includes = idList.includes(key);
    if (includes) {
      setIdList(idList.filter((item) => item !== key));
    } else {
      setIdList([...idList, key]);
    }
  };
  const windowSize = useWindowSize();

  const accordion = [];

  new Array(6).fill("Lorem ipsum").forEach((el) =>
    accordion.push(
      <AccordionDetails>
        <a href={settings[""]} target="_blank">
          {el}
        </a>
      </AccordionDetails>
    )
  );

  const makeColumns = (title, arrIn, newArrOut) => {
    newArrOut.push(
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          background: "red",
          height: 200,
        }}
      >
        {arrIn.map((el) => (
          <li>
            <a href="/" target="_blank">
              {el}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const firstCol = makeColumns(
    "Safin24",
    [new Array(6).fill("Lorem")],
   []
  );
  /*   const secondCol = makeColumns("About us", [new Array(4).fill("Lorem")]);
  const thirdCol = makeColumns("Social Media", [new Array(5).fill("Lorem")]);
  const fourCol = makeColumns("Lorem Ipsum", [new Array(4).fill("Lorem")]);
  const fifthCol = makeColumns("Help", [new Array(8).fill("Lorem")]); */

  return (
    <>
      <UpFooter />
      <div className="footer">
        {windowSize.width > 768 ? (
          <div className="footerCols">
            {firstCol}
            {/* {secondCol}
            {thirdCol}
            {fourCol}
            {fifthCol} */}

            {/* {new Array(12).fill("Lorem").map(el =>
                <li>
                <a href="/" target="_blank">
                  {el}
                </a>
              </li>
                )} */}
          </div>
        ) : (
          <Accordion id={""}>
            <AccordionSummary>Lorem</AccordionSummary>
            {accordion}
          </Accordion>
        )}

        <footer>{settings["footer_text"]}</footer>
      </div>
    </>
  );
};

export default Footer;
