import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { ReactComponent as Vegeta } from "assets/characters/vegeta.svg";
import { ReactComponent as Buu } from "assets/characters/buu.svg";
import { ReactComponent as Gohan } from "assets/characters/gohan.svg";
import { ReactComponent as Trunks } from "assets/characters/trunks.svg";
import { ReactComponent as Freeza } from "assets/characters/freeza.svg";
import { ReactComponent as C17 } from "assets/characters/c17.svg";
import { ReactComponent as C18 } from "assets/characters/c18.svg";
import { ReactComponent as Goku } from "assets/characters/goku.svg";
import { ReactComponent as Cell } from "assets/characters/cell.svg";
import { ReactComponent as Piccolo } from "assets/characters/piccolo.svg";
import { ReactComponent as Brolly } from "assets/characters/brolly.svg";
import { ReactComponent as Bardock } from "assets/characters/bardock.svg";
import { ReactComponent as BardockTech } from "assets/techniques/bardockTech.svg";
import { ReactComponent as BrollyTech } from "assets/techniques/brollyTech.svg";
import { ReactComponent as BuuTech } from "assets/techniques/buuTech.svg";
import { ReactComponent as C17Tech } from "assets/techniques/c17Tech.svg";
import { ReactComponent as C18Tech } from "assets/techniques/c18Tech.svg";
import { ReactComponent as CellTech } from "assets/techniques/cellTech.svg";
import { ReactComponent as FreezaTech } from "assets/techniques/freezaTech.svg";
import { ReactComponent as GohanTech } from "assets/techniques/gohanTech.svg";
import { ReactComponent as GokuTech } from "assets/techniques/gokuTech.svg";
import { ReactComponent as PiccoloTech } from "assets/techniques/piccoloTech.svg";
import { ReactComponent as TrunksTech } from "assets/techniques/trunksTech.svg";
import { ReactComponent as VegetaTech } from "assets/techniques/vegetaTech.svg";

import { useState } from "react";
import { Modal } from "antd";
import { useRWD } from "@appsomesolutions/rwd-utils";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechniquesStyle = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ModalStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TechniquesBody = () => {
  const [open, isOpen] = useState(false);
  const [char, setChar] = useState("");
  const { less } = useRWD();

  const WhichTableVisible = (char: string) => {
    switch (char) {
      case "Vegeta":
        return <VegetaTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Buu":
        return <BuuTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Goku":
        return <GokuTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Gohan":
        return <GohanTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Trunks":
        return <TrunksTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Freeza":
        return <FreezaTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "C17":
        return <C17Tech style={{ height: less.md ? `400px` : `auto` }} />;
      case "C18":
        return <C18Tech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Piccolo":
        return <PiccoloTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Cell":
        return <CellTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Brolly":
        return <BrollyTech style={{ height: less.md ? `400px` : `auto` }} />;
      case "Bardock":
        return <BardockTech style={{ height: less.md ? `400px` : `auto` }} />;
    }
  };

  return (
    <Main>
      <SubTitle title="Techniques" />
      <TechniquesStyle
        style={{
          gridTemplateColumns: less.md ? `repeat(4, 1fr)` : `repeat(3, 1fr)`,
        }}
      >
        <Vegeta
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Vegeta");
          }}
        />
        <Buu
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Buu");
          }}
        />
        <Goku
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Goku");
          }}
        />
        <Gohan
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Gohan");
          }}
        />
        <Trunks
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Trunks");
          }}
        />
        <Freeza
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Freeza");
          }}
        />
        <C17
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("C17");
          }}
        />
        <C18
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("C18");
          }}
        />
        <Piccolo
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Piccolo");
          }}
        />
        <Cell
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Cell");
          }}
        />
        <Brolly
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Brolly");
          }}
        />
        <Bardock
          style={{ cursor: "pointer" }}
          onClick={() => {
            isOpen(true);
            setChar("Bardock");
          }}
        />
        <Modal
          title={char}
          style={{ top: less.md ? 8 : 30 }}
          bodyStyle={{}}
          open={open}
          onOk={() => isOpen(false)}
          onCancel={() => isOpen(false)}
        >
          <ModalStyle>{WhichTableVisible(char)}</ModalStyle>
        </Modal>
      </TechniquesStyle>
    </Main>
  );
};
