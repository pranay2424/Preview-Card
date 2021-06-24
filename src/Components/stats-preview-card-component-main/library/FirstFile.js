import DesktopView from "./DesktopView";
import Content from "./Content";
import GetInsight from "./GetInsight";
import Image from "./Image";

const FirstFile = () => {
  return (
    <DesktopView>
      <Content>
        <GetInsight />
        <Image />
      </Content>
    </DesktopView>
  );
};

export default FirstFile;
